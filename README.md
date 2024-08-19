# Heritage

This is a property listing and bidding platform built using Django for the backend and React with Tailwind CSS for the frontend.

## Technologies Used

### Front-End

- **React:** A JavaScript library for building dynamic user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for styling the frontend components.

### Back-End

- **Django:** A high-level Python web framework for managing users, properties, bidding activities, and serving APIs.
- **Django REST Framework:** (Optional) Used to create RESTful APIs that the React frontend interacts with.

### Features

- **Property Listings:** Users can view detailed information and images for each property.
- **Bidding Info:** Displays the current highest bid and bidder details.
- **Bidding Process:** Users can place bids, with validation and updating of the highest bid.
- **Roles:**
  - **Admin:** Manages users, properties, and bidding activities.
  - **Bidder:** Places bids and views property details.
  - **Property Owner:** Lists properties and monitors bids.
- **Testimonials:** Users can submit and view reviews and ratings for properties.
- **Team Information:** Displays information about team members.
- **Search & Filter Functionality:** Users can search and filter properties based on various criteria.

## Installation

#### 1. Clone the repository:

```bash
git clone https://github.com/rifatblack/Heritage.git
cd Heritage
```

#### 2. Build the Docker container:

```bash
docker-compose build
```

#### 3. Run the Docker containers:

```bash
docker-compose up
```

#### 4. Frontend Access the API at http://localhost:3000/

#### 4. Backend Access the API at http://localhost:8001/

## Authors

- [@rifatblack](https://github.com/rifatblack/)

## License

[MIT](https://choosealicense.com/licenses/mit/)
