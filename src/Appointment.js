import React, { useState, useEffect } from 'react';
import { Input, Space, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import './Appointment.css';
import { bookLawyer, fetchLawyers } from './features/appointments/appointmentSlice';

const Row = (props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: props['data-row-key'],
  });

  const style = {
    ...props.style,
    transform: CSS.Transform.toString(
      transform && {
        ...transform,
        scaleY: 1,
      }
    ),
    transition,
    cursor: 'move',
    background: 'transparent', 
    ...(isDragging ? { position: 'relative', zIndex: 9999 } : {}),
  };

  return (
    <tr {...props} ref={setNodeRef} style={style} {...attributes} {...listeners} />
  );
};

function Appointment() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLawyers());
  }, [dispatch]);
 
  const lawyers = useSelector(state => state.appointments.data); 

  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = lawyers.filter(
      item => item.name.toLowerCase().includes(lowercasedQuery) ||
              item.speciality.toLowerCase().includes(lowercasedQuery) ||
              item.firms.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredData(filtered);
  }, [searchQuery, lawyers]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 1 } })
  );

  const onDragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
      setFilteredData((prev) => {
        const activeIndex = prev.findIndex((i) => i.key === active.id);
        const overIndex = prev.findIndex((i) => i.key === over?.id);
        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  };
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Speciality',
      dataIndex: 'speciality',
      key: 'speciality',
    },
    {
      title: 'Firms',
      dataIndex: 'firms',
      key: 'firms',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Phone number',
      dataIndex: 'phone_number',
      key: 'phone_number',
    },
    {
      title: 'Available Time',
      dataIndex: 'available_time',
      key: 'available_time',
    },
    {
      title: 'Booking Status',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          {record.booked ? (
            <span>Booked</span>
          ) : (
            <a onClick={() => dispatch(bookLawyer({ id: record.key }))}>
              Book {record.name}
            </a>
          )}
        </Space>
      ),
    },
  ];

  return (
    <div className="app-container"> 
      <Input
        placeholder="Search by name, speciality, or firms"
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: 16 }}
      />
      <DndContext sensors={sensors} modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
        <SortableContext items={filteredData.map((i) => i.key)} strategy={verticalListSortingStrategy}>
          <Table
            className='ant-table'
            components={{ body: { row: Row } }}
            rowKey="key"
            columns={columns}
            dataSource={filteredData}
          />
        </SortableContext>
      </DndContext>
    </div>
  );
}

export default Appointment;




