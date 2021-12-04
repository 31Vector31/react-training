import axios from "axios";

const table = "contacts";
const url = "https://api.m3o.com/v1/db/";
const axiosConfig = {
    "headers": {
        'Content-Type': 'application/json',
        "Authorization": "Bearer YzAyNzY5ZjUtOWVlNS00MjMwLWE0NTktZmMwZjA0ZDg1MjEw",
    }
};

export function createContact(contact) {
    const {id, name, surname, telephone} = contact;
    const data = {
        "table": table,
        "record": {
            "id": String(id),
            "name": name,
            "surname": surname,
            "telephone": telephone
        }
    };

    axios.post(url + "Create", data, axiosConfig);
}

export function readContacts() {
    const data = {
        "table": table
    };

    return axios.post(url + "Read", data, axiosConfig)
        .then(res => res.data.records);
}

export function deleteContact(id) {
    const data = {
        "table": table,
        "id": String(id)
    };

    axios.post(url + "Delete", data, axiosConfig);
}

export function updateContact(contact) {
    const {id, name, surname, telephone} = contact;
    const data = {
        "table": table,
        "record": {
            "id": String(id),
            "name": name,
            "surname": surname,
            "telephone": telephone
        }
    };

    axios.post(url + "Update", data, axiosConfig);
}

