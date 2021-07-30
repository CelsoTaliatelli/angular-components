import { TableColumnIcon } from '../table-column-icon/table-column-icon';
export interface TableColumn{

  property:string;
  cssWidth?:string;
  width?:string;
  type: string;
  icons?: TableColumnIcon;
  label: string;

}
