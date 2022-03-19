import { splitAddrs } from "./functions"

test('splits addrs separated by newline', () => {
  expect(splitAddrs(`
  AAAA
  AAAA
  `)).toEqual(['AAAA', 'AAAA'])
})

test('splits addrs separated by commas', () => {
  expect(splitAddrs(`AAAA,AAAA`)).toEqual(['AAAA', 'AAAA'])
})

test('splits addrs separated by spaces', () => {
  expect(splitAddrs(`AAAA AAAA`)).toEqual(['AAAA', 'AAAA'])
})

test('splits addrs separated by mixed delimeters', () => {
  expect(splitAddrs(`
  AAAA BBBB,,,,,
  AAAA`)).toEqual(['AAAA', 'BBBB', 'AAAA'])
})





  