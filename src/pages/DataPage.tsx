import React, { useState, useEffect } from "react";
import moment from "moment";

import { PersonForm } from "../components/PersonForm";
import { PersonList } from "../components/PersonList";

export const DataPage = () => {
  class Person {
    name: string;
    gender: string;
    dob: string;
    age: number;
    key: number;
    constructor(name: string, gender: boolean, dob: any, key?: number) {
      this.name = name;
      this.gender = gender ? "male" : "female";
      this.dob = dob.format("LL");
      this.key = key || data.length + 1;
      this.age = moment().diff(this.dob, "years");
    }
  }

  const Ruslan = new Person("Ruslan", true, moment("October 10, 1992"), 1);
  const Natasha = new Person("Natasha", false, moment("December 8, 1992"), 2);

  const defaultPersons: Person[] = [Ruslan, Natasha];

  const [data, setData] = useState<Person[]>(defaultPersons);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("data") || JSON.stringify(data)
    ) as Person[];
    setData(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const onFinish = ({ name, DoB, gender }) => {
    if (gender === undefined) gender = true;
    const newPerson = new Person(name, gender, DoB);

    setData((prev) => [...prev, newPerson]);
  };

  const handleDelete = (key) => {
    setData(data.filter((item) => item.key !== key));
  };

  return (
    <>
      <PersonForm onFinish={onFinish} />
      <PersonList data={data} handleDelete={handleDelete} />
    </>
  );
};
