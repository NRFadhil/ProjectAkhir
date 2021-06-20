import { useState, useEffect } from "react";

export const list_users = [
  {
    id: 1,
    name: "Chalid Ade Rahman",
    username: "chalidade",
    password: "123",
  },
  {
    id: 2,
    name: "Rico Fajar Afandi",
    username: "rico",
    password: "rico13",
  },
  {
    id: 3,
    name: "Abdul Aziz",
    username: "aziz",
    password: "aziz123",
  },
];

let is_login = false;

export function check_login() {
  return is_login;
}

export function set_login(value) {
  is_login = value;
  return is_login;
}
