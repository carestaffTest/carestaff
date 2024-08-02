import React, { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Dropdown = ({ value, onChangeHandler }: any) => {
  const [roles, setRoles] = useState([
    { _id: "1", position: "Admin" },
    { _id: "2", position: "Staff" },
    { _id: "3", position: "User" },
  ]);

  const [selectedValue, setSelectedValue] = useState(value);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const handleChange = (newValue: string) => {
    setSelectedValue(newValue);
    onChangeHandler(newValue);
  };
  return (
    <div>
      <Select onValueChange={handleChange} value={selectedValue}>
        <SelectTrigger className="select-field">
          <SelectValue>
            {roles.find((role) => role.position === selectedValue)?.position ||
              "Role"}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {roles.map((role) => (
            <SelectItem
              key={role._id}
              value={role.position}
              className="select-item p-regular-14"
            >
              {role.position}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Dropdown;
