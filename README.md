<h3> Cyclic Link </h3>- https://tiny-red-goose-hat.cyclic.app/


<h3>User Routes</h3>

1. For register-

http://localhost:8080/user/register (POST),<br>

Request Body - {<br>
    "email": "abc@gmail.com",<br>
    "password": "123"<br>
}

2. For Login-

http://localhost:8080/user/login (POST),<br>

Request Body - {<br>
    "email": "abc@gmail.com",<br>
    "password": "123"<br>
}


<h3>Flight Routes</h3>-

1. Getting All the Flights (GET)-
http://localhost:8080/flights,

2. Getting specific flight using id (GET) -
http://localhost:8080/flights/:id,

3. Posting new flight data (POST) -
http://localhost:8080/flights/,<br>
Request Body - {<br>
        "airline": "abc",<br>
        "flightNo": "abc",<br>
        "departure": "abc",<br>
        "arrival": "abc",<br>
        "departureTime": "2020-05-06T18:30:00.000Z",<br>
        "arrivalTime": "2020-05-06T18:30:00.000Z",<br>
        "seats": 5,<br>
        "price": 100<br>
    }

4. Updating flight data(PATCH) -
http://localhost:8080/flights/:id,

5. Deleting flight data(DELETE) -
http://localhost:8080/flights/:id,


<h3>Booking Route</h3>-

1. Booking flight-
http://localhost:8080/book/booking(POST) ,<br>
Request Body - {<br>
    "user": "6475b3d21c541e9b7f041f13",<br>
    "flight": "6475a2c0f9351e6812a6b895"<br>
}

2. Getting all the booking data(GET) -
http://localhost:8080/book/dashboard,


# rev7
