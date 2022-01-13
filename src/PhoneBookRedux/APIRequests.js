import axios from "axios";

const table = "contacts";
const baseURL = "https://api.m3o.com/v1/db";

const axiosInstance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YzAyNzY5ZjUtOWVlNS00MjMwLWE0NTktZmMwZjA0ZDg1MjEw",
    }
});

export function createContact(contact) {
    const {id, name, surname, telephone} = contact;
    const data = {
        table,
        "record": {
            "id": String(id),
            name,
            surname,
            telephone
        }
    };

    axiosInstance.post("/Create", data);
}

export function readContacts() {
    const data = {
        table
    };

    return axiosInstance.post("/Read", data)
        .then(res => res.data.records);
}

export function delContact(id) {
    const data = {
        table,
        "id": String(id)
    };

    axiosInstance.post("/Delete", data);
}

export function updateContact(contact) {
    const {id, name, surname, telephone} = contact;
    const data = {
        table,
        "record": {
            "id": String(id),
            name,
            surname,
            telephone
        }
    };

    axiosInstance.post("/Update", data);
}

