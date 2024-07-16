import { faker, Faker } from "@faker-js/faker"

export const creditCarddetails={
    CCOwnerName:faker.person.fullName(),
    CCNumber:faker.finance.creditCardNumber("################"),
    validuntil:"12/27",
    ccCVV:faker.finance.creditCardCVV()
}