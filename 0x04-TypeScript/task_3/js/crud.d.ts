/**
 * Holds type declaration for each crud operation
 */

import { RowID, RowElement} from './interface'

export function insertRow(row: RowElement): number;

export function deletedRow(rowId: RowID): void;

export function updateRow(rowId: RowID, row: RowElement): RowID;