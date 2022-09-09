import Chance from 'chance';

const chance = new Chance(312);

const generateCard = () => ({
    _id: chance.guid(),
    title: chance.company(),
    description: chance.sentence(),
    address: chance.address(),
    bizNumber: chance.integer({ min: 1_000_000, max: 9_999_999 }),
    phone: chance.phone(),
    image: {
        url: chance.avatar({ protocol: 'https' }),
        alt: chance.word(),
    },
});

const generateCards = (count) => [...Array(count).keys()].map(() => generateCard());

export { generateCards, generateCard };
