import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';

// Mock data for event bookings
const eventBookings = [
  { id: 1, eventName: 'Spring Feast', date: '2024-03-10', attendees: 120, revenue: 1500 },
  { id: 2, eventName: 'Foodie Friday', date: '2024-04-05', attendees: 90, revenue: 1100 },
  { id: 3, eventName: 'Summer Sizzler', date: '2025-06-20', attendees: 150, revenue: 1800 },
];

// Mock data for table bookings
const tableBookings = [
  { id: 1, tableName: 'Table 1', date: '2024-03-10', guests: 4, revenue: 100 },
  { id: 2, tableName: 'Table 2', date: '2024-04-05', guests: 2, revenue: 50 },
  { id: 3, tableName: 'Table 3', date: '2025-06-20', guests: 6, revenue: 150 },
];

const AdminReports = () => {
  const [eventsData, setEventsData] = useState(eventBookings);
  const [tablesData, setTablesData] = useState(tableBookings);

  // Calculate total bookings and revenue for both events and tables
  const calculateTotal = (data) => {
    const totalBookings = data.length;
    const totalRevenue = data.reduce((acc, curr) => acc + curr.revenue, 0);
    return { totalBookings, totalRevenue };
  };

  const eventTotal = calculateTotal(eventsData);
  const tableTotal = calculateTotal(tablesData);

  // Filter upcoming, ongoing, and previous events
  const categorizeBookings = (data, type) => {
    const today = new Date().toISOString().split('T')[0];
    const upcoming = [], ongoing = [], previous = [];

    data.forEach((item) => {
      if (item.date > today) upcoming.push(item);
      else if (item.date === today) ongoing.push(item);
      else previous.push(item);
    });

    return { upcoming, ongoing, previous };
  };

  const eventCategorized = categorizeBookings(eventsData);
  const tableCategorized = categorizeBookings(tablesData);

  return (
    <>
      <AdminNavbar />
      <div className="p-6 bg-white ">
        <h2 className="text-4xl font-bold text-red-700 mb-6">Booking Reports</h2>

        {/* Event Booking Report Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">Event Bookings</h3>
          <div className="mb-4">
            <h4 className="text-xl text-red-500">Total Event Bookings: {eventTotal.totalBookings}</h4>
            <h4 className="text-xl text-green-500">Total Event Revenue: ${eventTotal.totalRevenue}</h4>
          </div>

          {/* Categorized Events */}
          <div className="mb-4">
            <h4 className="font-bold text-lg text-pink-600">Upcoming Events</h4>
            {eventCategorized.upcoming.length > 0 ? eventCategorized.upcoming.map((event) => (
              <div key={event.id} className="bg-yellow-100 p-4 rounded-md shadow mb-2">
                <p><strong>{event.eventName}</strong> - Date: {event.date}</p>
                <p>Attendees: {event.attendees}</p>
                <p>Revenue: ${event.revenue}</p>
              </div>
            )) : <p>No upcoming events.</p>}
          </div>

          <div className="mb-4">
            <h4 className="font-bold text-lg text-blue-600">Ongoing Events</h4>
            {eventCategorized.ongoing.length > 0 ? eventCategorized.ongoing.map((event) => (
              <div key={event.id} className="bg-blue-100 p-4 rounded-md shadow mb-2">
                <p><strong>{event.eventName}</strong> - Date: {event.date}</p>
                <p>Attendees: {event.attendees}</p>
                <p>Revenue: ${event.revenue}</p>
              </div>
            )) : <p>No ongoing events.</p>}
          </div>

          <div className="mb-4">
            <h4 className="font-bold text-lg text-purple-600">Previous Events</h4>
            {eventCategorized.previous.length > 0 ? eventCategorized.previous.map((event) => (
              <div key={event.id} className="bg-purple-100 p-4 rounded-md shadow mb-2">
                <p><strong>{event.eventName}</strong> - Date: {event.date}</p>
                <p>Attendees: {event.attendees}</p>
                <p>Revenue: ${event.revenue}</p>
              </div>
            )) : <p>No previous events.</p>}
          </div>
        </div>

        {/* Table Booking Report Section */}
        <div>
          <h3 className="text-3xl font-semibold text-green-600 mb-4">Table Bookings</h3>
          <div className="mb-4">
            <h4 className="text-xl text-red-500">Total Table Bookings: {tableTotal.totalBookings}</h4>
            <h4 className="text-xl text-green-500">Total Table Revenue: ${tableTotal.totalRevenue}</h4>
          </div>

          {/* Categorized Table Bookings */}
          <div className="mb-4">
            <h4 className="font-bold text-lg text-pink-600">Upcoming Table Bookings</h4>
            {tableCategorized.upcoming.length > 0 ? tableCategorized.upcoming.map((booking) => (
              <div key={booking.id} className="bg-yellow-100 p-4 rounded-md shadow mb-2">
                <p><strong>{booking.tableName}</strong> - Date: {booking.date}</p>
                <p>Guests: {booking.guests}</p>
                <p>Revenue: ${booking.revenue}</p>
              </div>
            )) : <p>No upcoming table bookings.</p>}
          </div>

          <div className="mb-4">
            <h4 className="font-bold text-lg text-blue-600">Ongoing Table Bookings</h4>
            {tableCategorized.ongoing.length > 0 ? tableCategorized.ongoing.map((booking) => (
              <div key={booking.id} className="bg-blue-100 p-4 rounded-md shadow mb-2">
                <p><strong>{booking.tableName}</strong> - Date: {booking.date}</p>
                <p>Guests: {booking.guests}</p>
                <p>Revenue: ${booking.revenue}</p>
              </div>
            )) : <p>No ongoing table bookings.</p>}
          </div>

          <div className="mb-4">
            <h4 className="font-bold text-lg text-purple-600">Previous Table Bookings</h4>
            {tableCategorized.previous.length > 0 ? tableCategorized.previous.map((booking) => (
              <div key={booking.id} className="bg-purple-100 p-4 rounded-md shadow mb-2">
                <p><strong>{booking.tableName}</strong> - Date: {booking.date}</p>
                <p>Guests: {booking.guests}</p>
                <p>Revenue: ${booking.revenue}</p>
              </div>
            )) : <p>No previous table bookings.</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminReports;
