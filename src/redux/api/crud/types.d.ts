/* eslint-disable @typescript-eslint/no-unused-vars */
export namespace CRUD {
	type GetCrudRequest = void;
	type GetCrudResponse = {
		_id?: number;
		firstName: string;
		lastName: string;
	}[];

	type CreateCrudRequest = {
		_id?: number;
		firstName: string;
		lastName: string;
	};
	type CreateCrudResponse = {
		_id?: number;
		firstName: string;
		lastName: string;
	}[];

	type DeleteCrudRequest = number; 
  type DeleteCrudResponse = void; 
}
