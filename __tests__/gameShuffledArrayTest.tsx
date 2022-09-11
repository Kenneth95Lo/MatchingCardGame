import ShuffledCardsGenerator from '../src/helpers/ShuffledCardsGenerator'

it('shuffled cards arr should have 12 element', () => {
  expect(ShuffledCardsGenerator().length).toEqual(12)
})
