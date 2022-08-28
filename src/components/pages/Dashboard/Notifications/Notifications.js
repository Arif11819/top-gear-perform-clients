import React from "react";
import "./Notification.css";

const Notifications = () => {
  return (
    <div className="grid grid-cols-2">
      
            <div>
              <h3 className="font-bold">New notificatios!</h3>
              <div className="text-xs">You have 3 unread notificatios</div>
            </div>
       
    </div>
  );
};

export default Notifications;
