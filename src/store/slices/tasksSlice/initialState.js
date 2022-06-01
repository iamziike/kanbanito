import { v4 as uuid } from 'uuid';

import {
  DONE,
  HIGH,
  IN_PROGRESS,
  IN_REVIEW,
  LOW,
  MEDIUM,
  TODO,
} from '../../../helpers/constants';

const initialState = JSON.parse(localStorage.getItem('tasks')) || {
  project1: {
    data: {
      [TODO]: [
        {
          id: uuid(),
          title: 'Give This Man a Job',
          by: 'Ikezi Wisdom',
          createdOn: 1653060540601,
          detail:
            'So I know this is kinda like a shameless ad, but if you like what you see the creator is currently seaching a for frontend position, P.S he is fluent in English, currently learning French and would like to show how hardworking he is in a working environment. He lives in Ghana, its a nice-ish country in Africa, you can also visit his github for other projects',
          comments: ['Okie dokie'],
          tags: ['#FRONTEND', '#WEBDEV'],
          priority: HIGH,
          isSpecial: true,
        },
        {
          id: uuid(),
          title: 'Create New Wireframe',
          by: 'John Doe',
          createdOn: 1653060540601,
          detail:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo in natus saepe voluptas corrupti et voluptatum est maxime aliquid aliquam, consequuntur vitae consectetur error, ex, nobis nihil. Saepe perspiciatis, iure, repellendus assumenda aliquid aperiam sapiente veritatis ullam commodi temporibus sit deserunt quibusdam fugiat doloremque labore incidunt enim neque eligendi excepturi quisquam? Culpa quasi atque soluta eaque fugiat fuga fugit perferendis repellat tempora ullam',
          comments: ['Okie dokie', 'Okie dokie', 'Okie dokie'],
          tags: ['#UIDESIGN', '#WEBDEV'],
          priority: LOW,
        },
        {
          id: uuid(),
          title: 'Create New Wireframe',
          by: 'Dom Torreto',
          createdOn: 1653060540601,
          detail:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo in natus saepe voluptas corrupti et voluptatum est maxime aliquid aliquam, consequuntur vitae consectetur error, ex, nobis nihil. Saepe perspiciatis, iure, repellendus assumenda aliquid aperiam sapiente veritatis ullam commodi temporibus sit deserunt quibusdam fugiat doloremque labore incidunt enim neque eligendi excepturi quisquam? Culpa quasi atque soluta eaque fugiat fuga fugit perferendis repellat tempora ullam numquam quae ',
          comments: [],
          tags: ['#UIDESIGN'],
          priority: MEDIUM,
        },
        {
          id: uuid(),
          title: 'Create New Wireframe',
          by: 'Clark Kent',
          createdOn: 1653060540601,
          detail:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo in natus saepe voluptas corrupti et voluptatum est maxime aliquid aliquam, consequuntur vitae consectetur error, ex, nobis nihil. Saepe perspiciatis, iure, repellendus assumenda aliquid aperiam sapiente veritatis ullam commodi temporibus sit deserunt quibusdam fugiat doloremque labore incidunt enim neque eligendi excepturi quisquam? Culpa quasi atque soluta eaque fugiat fuga fugit perferendis repellat tempora ullam numquam quae ',
          comments: [],
          tags: ['#UIDESIGN'],
          priority: LOW,
        },
        {
          id: uuid(),
          title: 'Create New Wireframe',
          by: 'Joseph Lingard',
          createdOn: 1653060540601,
          detail:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo in natus saepe voluptas corrupti et voluptatum est maxime aliquid aliquam, consequuntur vitae consectetur error, ex, nobis nihil. Saepe perspiciatis, iure, repellendus assumenda aliquid aperiam sapiente veritatis ullam commodi temporibus sit deserunt quibusdam fugiat doloremque labore incidunt enim neque eligendi excepturi quisquam? Culpa quasi atque soluta eaque fugiat fuga fugit perferendis repellat tempora ullam numquam quae ',
          comments: [],
          tags: ['#UIDESIGN'],
          priority: HIGH,
        },
        {
          id: uuid(),
          title: 'Create New Second Wireframe',
          by: 'John Lingard',
          createdOn: 1653062540601,
          detail:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo in natus saepe voluptas corrupti et voluptatum est maxime aliquid aliquam, consequuntur vitae consectetur error, ex, nobis nihil. Saepe perspiciatis, iure, repellendus assumenda aliquid aperiam sapiente veritatis ullam commodi temporibus sit deserunt quibusdam fugiat doloremque labore incidunt enim neque eligendi excepturi quisquam? Culpa quasi atque soluta eaque fugiat fuga fugit perferendis repellat tempora ullam numquam quae ',
          comments: [],
          tags: ['#UIDESIGN'],
          priority: LOW,
        },
      ],
      [IN_PROGRESS]: [
        {
          id: uuid(),
          title: 'Create New Wireframe',
          by: 'Clark Kent',
          createdOn: 1653060540601,
          detail:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo in natus saepe voluptas corrupti et voluptatum est maxime aliquid aliquam, consequuntur vitae consectetur error, ex, nobis nihil. Saepe perspiciatis, iure, repellendus assumenda aliquid aperiam sapiente veritatis ullam commodi temporibus sit deserunt quibusdam fugiat doloremque labore incidunt enim neque eligendi excepturi quisquam? Culpa quasi atque soluta eaque fugiat fuga fugit perferendis repellat tempora ullam numquam quae ',
          comments: ['Okie dokie', 'Okie dokie', 'Okie dokie'],
          tags: ['#UIDESIGN'],
          priority: LOW,
        },
        {
          id: uuid(),
          title: 'Create New Wireframe',
          by: 'Joseph Lingard',
          createdOn: 1653060540601,
          detail:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo in natus saepe voluptas corrupti et voluptatum est maxime aliquid aliquam, consequuntur vitae consectetur error, ex, nobis nihil. Saepe perspiciatis, iure, repellendus assumenda aliquid aperiam sapiente veritatis ullam commodi temporibus sit deserunt quibusdam fugiat doloremque labore incidunt enim neque eligendi excepturi quisquam? Culpa quasi atque soluta eaque fugiat fuga fugit perferendis repellat tempora ullam numquam quae ',
          comments: [],
          tags: ['#UIDESIGN'],
          priority: HIGH,
        },
        {
          id: uuid(),
          title: 'Create New Second Wireframe',
          by: 'John Lingard',
          createdOn: 1653062540601,
          detail:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo in natus saepe voluptas corrupti et voluptatum est maxime aliquid aliquam, consequuntur vitae consectetur error, ex, nobis nihil. Saepe perspiciatis, iure, repellendus assumenda aliquid aperiam sapiente veritatis ullam commodi temporibus sit deserunt quibusdam fugiat doloremque labore incidunt enim neque eligendi excepturi quisquam? Culpa quasi atque soluta eaque fugiat fuga fugit perferendis repellat tempora ullam numquam quae ',
          comments: [],
          tags: ['#UIDESIGN'],
          priority: LOW,
        },
      ],
      [IN_REVIEW]: [
        {
          id: uuid(),
          title: 'Create New Wireframe',
          by: 'Clark Kent',
          createdOn: 1653060540601,
          detail:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo in natus saepe voluptas corrupti et voluptatum est maxime aliquid aliquam, consequuntur vitae consectetur error, ex, nobis nihil. Saepe perspiciatis, iure, repellendus assumenda aliquid aperiam sapiente veritatis ullam commodi temporibus sit deserunt quibusdam fugiat doloremque labore incidunt enim neque eligendi excepturi quisquam? Culpa quasi atque soluta eaque fugiat fuga fugit perferendis repellat tempora ullam numquam quae ',
          comments: [],
          tags: ['#UIDESIGN'],
          priority: LOW,
        },
        {
          id: uuid(),
          title: 'Create New Wireframe',
          by: 'Joseph Lingard',
          createdOn: 1653060540601,
          detail:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo in natus saepe voluptas corrupti et voluptatum est maxime aliquid aliquam, consequuntur vitae consectetur error, ex, nobis nihil. Saepe perspiciatis, iure, repellendus assumenda aliquid aperiam sapiente veritatis ullam commodi temporibus sit deserunt quibusdam fugiat doloremque labore incidunt enim neque eligendi excepturi quisquam? Culpa quasi atque soluta eaque fugiat fuga fugit perferendis repellat tempora ullam numquam quae ',
          comments: [],
          tags: ['#UIDESIGN'],
          priority: HIGH,
        },
        {
          id: uuid(),
          title: 'Create New Second Wireframe',
          by: 'John Lingard',
          createdOn: 1653062540601,
          detail:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo in natus saepe voluptas corrupti et voluptatum est maxime aliquid aliquam, consequuntur vitae consectetur error, ex, nobis nihil. Saepe perspiciatis, iure, repellendus assumenda aliquid aperiam sapiente veritatis ullam commodi temporibus sit deserunt quibusdam fugiat doloremque labore incidunt enim neque eligendi excepturi quisquam? Culpa quasi atque soluta eaque fugiat fuga fugit perferendis repellat tempora ullam numquam quae ',
          comments: [],
          tags: ['#UIDESIGN'],
          priority: LOW,
        },
      ],
      [DONE]: [
        {
          id: uuid(),
          title: 'Create New Wireframe',
          by: 'Clark Kent',
          createdOn: 1653060540601,
          detail:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo in natus saepe voluptas corrupti et voluptatum est maxime aliquid aliquam, consequuntur vitae consectetur error, ex, nobis nihil. Saepe perspiciatis, iure, repellendus assumenda aliquid aperiam sapiente veritatis ullam commodi temporibus sit deserunt quibusdam fugiat doloremque labore incidunt enim neque eligendi excepturi quisquam? Culpa quasi atque soluta eaque fugiat fuga fugit perferendis repellat tempora ullam numquam quae ',
          comments: [],
          tags: ['#UIDESIGN'],
          priority: LOW,
        },
        {
          id: uuid(),
          title: 'Create New Wireframe',
          by: 'Joseph Lingard',
          createdOn: 1653060540601,
          detail:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo in natus saepe voluptas corrupti et voluptatum est maxime aliquid aliquam, consequuntur vitae consectetur error, ex, nobis nihil. Saepe perspiciatis, iure, repellendus assumenda aliquid aperiam sapiente veritatis ullam commodi temporibus sit deserunt quibusdam fugiat doloremque labore incidunt enim neque eligendi excepturi quisquam? Culpa quasi atque soluta eaque fugiat fuga fugit perferendis repellat tempora ullam numquam quae ',
          comments: [],
          tags: ['#UIDESIGN'],
          priority: HIGH,
        },
        {
          id: uuid(),
          title: 'Create New Second Wireframe',
          by: 'John Lingard',
          createdOn: 1653062540601,
          detail:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo in natus saepe voluptas corrupti et voluptatum est maxime aliquid aliquam, consequuntur vitae consectetur error, ex, nobis nihil. Saepe perspiciatis, iure, repellendus assumenda aliquid aperiam sapiente veritatis ullam commodi temporibus sit deserunt quibusdam fugiat doloremque labore incidunt enim neque eligendi excepturi quisquam? Culpa quasi atque soluta eaque fugiat fuga fugit perferendis repellat tempora ullam numquam quae ',
          comments: [],
          tags: ['#UIDESIGN'],
          priority: LOW,
        },
      ],
    },
    createdOn: 1653491104642,
  },
  project2: {
    data: {
      [TODO]: [
        {
          id: uuid(),
          title: 'Give This Man a Job',
          by: 'Ikezi Wisdom',
          createdOn: 1653060540601,
          detail:
            'So I know this is kinda like a shameless ad, but if you like what you see the creator is currently seaching a for frontend position, P.S he is fluent in English, currently learning French and would like to show how hardworking he is in a working environment. He lives in Ghana, its a nice-ish country in Africa, you can also visit his github for other projects',
          comments: ['Okie dokie', 'Okie dokie', 'Okie dokie'],
          tags: ['#FRONTEND', '#WEBDEV'],
          priority: HIGH,
          isSpecial: true,
        },
        {
          id: uuid(),
          title: 'Create New Wireframe',
          by: 'John Doe',
          createdOn: 1653060540601,
          detail:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo in natus saepe voluptas corrupti et voluptatum est maxime aliquid aliquam, consequuntur vitae consectetur error, ex, nobis nihil. Saepe perspiciatis, iure, repellendus assumenda aliquid aperiam sapiente veritatis ullam commodi temporibus sit deserunt quibusdam fugiat doloremque labore incidunt enim neque eligendi excepturi quisquam? Culpa quasi atque soluta eaque fugiat fuga fugit perferendis repellat tempora ullam',
          comments: [],
          tags: ['#UIDESIGN', '#WEBDEV'],
          priority: LOW,
        },
        {
          id: uuid(),
          title: 'Create New Wireframe',
          by: 'Dom Torreto',
          createdOn: 1653060540601,
          detail:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo in natus saepe voluptas corrupti et voluptatum est maxime aliquid aliquam, consequuntur vitae consectetur error, ex, nobis nihil. Saepe perspiciatis, iure, repellendus assumenda aliquid aperiam sapiente veritatis ullam commodi temporibus sit deserunt quibusdam fugiat doloremque labore incidunt enim neque eligendi excepturi quisquam? Culpa quasi atque soluta eaque fugiat fuga fugit perferendis repellat tempora ullam numquam quae ',
          comments: [],
          tags: ['#UIDESIGN'],
          priority: MEDIUM,
        },
        {
          id: uuid(),
          title: 'Create New Wireframe',
          by: 'Clark Kent',
          createdOn: 1653060540601,
          detail:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo in natus saepe voluptas corrupti et voluptatum est maxime aliquid aliquam, consequuntur vitae consectetur error, ex, nobis nihil. Saepe perspiciatis, iure, repellendus assumenda aliquid aperiam sapiente veritatis ullam commodi temporibus sit deserunt quibusdam fugiat doloremque labore incidunt enim neque eligendi excepturi quisquam? Culpa quasi atque soluta eaque fugiat fuga fugit perferendis repellat tempora ullam numquam quae ',
          comments: [],
          tags: ['#UIDESIGN'],
          priority: LOW,
        },
        {
          id: uuid(),
          title: 'Create New Wireframe',
          by: 'Joseph Lingard',
          createdOn: 1653060540601,
          detail:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo in natus saepe voluptas corrupti et voluptatum est maxime aliquid aliquam, consequuntur vitae consectetur error, ex, nobis nihil. Saepe perspiciatis, iure, repellendus assumenda aliquid aperiam sapiente veritatis ullam commodi temporibus sit deserunt quibusdam fugiat doloremque labore incidunt enim neque eligendi excepturi quisquam? Culpa quasi atque soluta eaque fugiat fuga fugit perferendis repellat tempora ullam numquam quae ',
          comments: [],
          tags: ['#UIDESIGN'],
          priority: HIGH,
        },
        {
          id: uuid(),
          title: 'Create New Second Wireframe',
          by: 'John Lingard',
          createdOn: 1653062540601,
          detail:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo in natus saepe voluptas corrupti et voluptatum est maxime aliquid aliquam, consequuntur vitae consectetur error, ex, nobis nihil. Saepe perspiciatis, iure, repellendus assumenda aliquid aperiam sapiente veritatis ullam commodi temporibus sit deserunt quibusdam fugiat doloremque labore incidunt enim neque eligendi excepturi quisquam? Culpa quasi atque soluta eaque fugiat fuga fugit perferendis repellat tempora ullam numquam quae ',
          comments: [],
          tags: ['#UIDESIGN'],
          priority: LOW,
        },
      ],
      [IN_PROGRESS]: [
        {
          id: uuid(),
          title: 'Create New Wireframe',
          by: 'Clark Kent',
          createdOn: 1653060540601,
          detail:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo in natus saepe voluptas corrupti et voluptatum est maxime aliquid aliquam, consequuntur vitae consectetur error, ex, nobis nihil. Saepe perspiciatis, iure, repellendus assumenda aliquid aperiam sapiente veritatis ullam commodi temporibus sit deserunt quibusdam fugiat doloremque labore incidunt enim neque eligendi excepturi quisquam? Culpa quasi atque soluta eaque fugiat fuga fugit perferendis repellat tempora ullam numquam quae ',
          comments: [],
          tags: ['#UIDESIGN'],
          priority: LOW,
        },
        {
          id: uuid(),
          title: 'Create New Wireframe',
          by: 'Joseph Lingard',
          createdOn: 1653060540601,
          detail:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo in natus saepe voluptas corrupti et voluptatum est maxime aliquid aliquam, consequuntur vitae consectetur error, ex, nobis nihil. Saepe perspiciatis, iure, repellendus assumenda aliquid aperiam sapiente veritatis ullam commodi temporibus sit deserunt quibusdam fugiat doloremque labore incidunt enim neque eligendi excepturi quisquam? Culpa quasi atque soluta eaque fugiat fuga fugit perferendis repellat tempora ullam numquam quae ',
          comments: [],
          tags: ['#UIDESIGN'],
          priority: HIGH,
        },
        {
          id: uuid(),
          title: 'Create New Second Wireframe',
          by: 'John Lingard',
          createdOn: 1653062540601,
          detail:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo in natus saepe voluptas corrupti et voluptatum est maxime aliquid aliquam, consequuntur vitae consectetur error, ex, nobis nihil. Saepe perspiciatis, iure, repellendus assumenda aliquid aperiam sapiente veritatis ullam commodi temporibus sit deserunt quibusdam fugiat doloremque labore incidunt enim neque eligendi excepturi quisquam? Culpa quasi atque soluta eaque fugiat fuga fugit perferendis repellat tempora ullam numquam quae ',
          comments: [],
          tags: ['#UIDESIGN'],
          priority: LOW,
        },
      ],
      [IN_REVIEW]: [
        {
          id: uuid(),
          title: 'Create New Wireframe',
          by: 'Clark Kent',
          createdOn: 1653060540601,
          detail:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo in natus saepe voluptas corrupti et voluptatum est maxime aliquid aliquam, consequuntur vitae consectetur error, ex, nobis nihil. Saepe perspiciatis, iure, repellendus assumenda aliquid aperiam sapiente veritatis ullam commodi temporibus sit deserunt quibusdam fugiat doloremque labore incidunt enim neque eligendi excepturi quisquam? Culpa quasi atque soluta eaque fugiat fuga fugit perferendis repellat tempora ullam numquam quae ',
          comments: [],
          tags: ['#UIDESIGN'],
          priority: LOW,
        },
        {
          id: uuid(),
          title: 'Create New Wireframe',
          by: 'Joseph Lingard',
          createdOn: 1653060540601,
          detail:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo in natus saepe voluptas corrupti et voluptatum est maxime aliquid aliquam, consequuntur vitae consectetur error, ex, nobis nihil. Saepe perspiciatis, iure, repellendus assumenda aliquid aperiam sapiente veritatis ullam commodi temporibus sit deserunt quibusdam fugiat doloremque labore incidunt enim neque eligendi excepturi quisquam? Culpa quasi atque soluta eaque fugiat fuga fugit perferendis repellat tempora ullam numquam quae ',
          comments: [],
          tags: ['#UIDESIGN'],
          priority: HIGH,
        },
        {
          id: uuid(),
          title: 'Create New Second Wireframe',
          by: 'John Lingard',
          createdOn: 1653062540601,
          detail:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo in natus saepe voluptas corrupti et voluptatum est maxime aliquid aliquam, consequuntur vitae consectetur error, ex, nobis nihil. Saepe perspiciatis, iure, repellendus assumenda aliquid aperiam sapiente veritatis ullam commodi temporibus sit deserunt quibusdam fugiat doloremque labore incidunt enim neque eligendi excepturi quisquam? Culpa quasi atque soluta eaque fugiat fuga fugit perferendis repellat tempora ullam numquam quae ',
          comments: [],
          tags: ['#UIDESIGN'],
          priority: LOW,
        },
      ],
      [DONE]: [
        {
          id: uuid(),
          title: 'Create New Wireframe',
          by: 'Clark Kent',
          createdOn: 1653060540601,
          detail:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo in natus saepe voluptas corrupti et voluptatum est maxime aliquid aliquam, consequuntur vitae consectetur error, ex, nobis nihil. Saepe perspiciatis, iure, repellendus assumenda aliquid aperiam sapiente veritatis ullam commodi temporibus sit deserunt quibusdam fugiat doloremque labore incidunt enim neque eligendi excepturi quisquam? Culpa quasi atque soluta eaque fugiat fuga fugit perferendis repellat tempora ullam numquam quae ',
          comments: [],
          tags: ['#UIDESIGN'],
          priority: LOW,
        },
        {
          id: uuid(),
          title: 'Create New Wireframe',
          by: 'Joseph Lingard',
          createdOn: 1653060540601,
          detail:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo in natus saepe voluptas corrupti et voluptatum est maxime aliquid aliquam, consequuntur vitae consectetur error, ex, nobis nihil. Saepe perspiciatis, iure, repellendus assumenda aliquid aperiam sapiente veritatis ullam commodi temporibus sit deserunt quibusdam fugiat doloremque labore incidunt enim neque eligendi excepturi quisquam? Culpa quasi atque soluta eaque fugiat fuga fugit perferendis repellat tempora ullam numquam quae ',
          comments: [],
          tags: ['#UIDESIGN'],
          priority: HIGH,
        },
        {
          id: uuid(),
          title: 'Create New Second Wireframe',
          by: 'John Lingard',
          createdOn: 1653062540601,
          detail:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo in natus saepe voluptas corrupti et voluptatum est maxime aliquid aliquam, consequuntur vitae consectetur error, ex, nobis nihil. Saepe perspiciatis, iure, repellendus assumenda aliquid aperiam sapiente veritatis ullam commodi temporibus sit deserunt quibusdam fugiat doloremque labore incidunt enim neque eligendi excepturi quisquam? Culpa quasi atque soluta eaque fugiat fuga fugit perferendis repellat tempora ullam numquam quae ',
          comments: [],
          tags: ['#UIDESIGN'],
          priority: LOW,
        },
      ],
    },
    createdOn: 1653491316024,
  },
};

export default initialState;
