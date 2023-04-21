import React, { useState } from "react";
import "./styles.css";

type Event = {
  id: number;
  title: string;
  completed: boolean;
};

const EventLog = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [newEventTitle, setNewEventTitle] = useState<string>("");

  const handleAddEvent = () => {
    if (newEventTitle.trim() !== "") {
      const newEvent: Event = {
        id: Date.now(),
        title: newEventTitle,
        completed: false,
      };
      setEvents([...events, newEvent]);
      setNewEventTitle("");
    }
  };

  const handleDeleteEvent = (id: number) => {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
  };

  const handleMarkEventCompleted = (id: number) => {
    const updatedEvents = events.map((event) => {
      if (event.id === id) {
        return {
          ...event,
          completed: true,
        };
      } else {
        return event;
      }
    });
    setEvents(updatedEvents);
  };

  return (
    <div className='container'>
      <div className='landing-page'>
        <h1>Welcome to the Event Log!</h1>
        <p>
          This is a simple event log app built with React and TypeScript. You
          can use it to keep track of your upcoming events.
        </p>
      </div>
      <div className='event-log'>
        <h2>Add Event</h2>
        <div>
          <input
            type='text'
            value={newEventTitle}
            onChange={(e) => setNewEventTitle(e.target.value)}
          />
          <button onClick={handleAddEvent}>Add Event</button>
        </div>
        <h2>Events</h2>
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <span>{event.title}</span>
              <button onClick={() => handleDeleteEvent(event.id)}>
                Delete
              </button>
              {!event.completed && (
                <button onClick={() => handleMarkEventCompleted(event.id)}>
                  Mark as Completed
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventLog;
