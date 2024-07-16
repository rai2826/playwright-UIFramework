import { faker, Faker } from "@faker-js/faker"
export const deliveryDetails={
    firstname:faker.person.firstName(),
    lastname:faker.person.lastName(),
    street:faker.location.street(),
    postcode:faker.location.zipCode(),
    city:faker.location.city(),
    country:"United States of America"

}