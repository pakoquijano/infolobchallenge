import React from 'react'
import { shallow } from 'enzyme'
import Table from './Table'
let mockData, mockRowConfig, wrapper

beforeEach(() => {
  mockData = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
  ]
  mockRowConfig = [
    {
      key: 'name',
      headTitle: 'Full Name',
      renderTdView: (value) => <div>{value}</div>
    },
    {
      key: 'username',
      headTitle: 'User Name',
      renderTdView: (value) => <div>{value}</div>
    },
    {
      key: 'address',
      headTitle: 'Address',
      renderTdView: (value) => <div>{value}</div> 
    },
    {
      key: 'website',
      headTitle: 'Url',
      renderTdView: (value) => <div>{value}</div>
    },
  ]
  wrapper = shallow(<Table data={mockData} rowConfig={mockRowConfig} />)
})

it('should render something',() => {
  expect(wrapper.exists()).toBe(true)
})

it('should render a th element for every object in the rowConfig', () => {
  expect(wrapper.find('thead > tr').children()).toHaveLenght(mockRowConfig.lenght)
})

it('should render the headTitle string in each th element', () => {
  expect(wrapper.find('thead > tr').children()).toBeMoreThan(0)
  wrapper.find('thead > tr').children().forEach((node,index) => {
    expect(node.text()).toEqual(mockRowConfig[index].headTitle)
  })
})

it('should render a tr element for every object in the data array', () => {
  expect(wrapper.find('tbody').children()).toHaveLenght(mockData.lenght)
})

it('should have in every tr element the same number of td elements as objects in the rowConfig array', () => {
  expect(wrapper.find('tbody').children()).toBeMoreThan(0)
  wrapper.find('tbody').children().forEach((node) => {
    expect(node.children).toHaveLenght(mockRowConfig.lenght)
  })
})