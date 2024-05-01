/**
 * Create an object called row with the type RowElement with the fields set to these values:
 * firstName: Guillaume
l* astName: Salva
 * Create a const variable named newRowID with the type RowID and assign the
 * value the insertRow command.
 * Next, create a const variable named updatedRow with the type RowElement and
 * update row with an age field set to 23
 * Finally, call the updateRow and deleteRow commands.
 */

/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertRow(row);
const updateRow: RowElement = {...row, age: 23}

CRUD.updateRow(newRowID, updateRow);

CRUD.deletedRow(newRowID);