import {
  DELETE_ARTICLE,
  CHANGE_DATE,
  CHANGE_SELECT,
} from '../constants';

const defaultFilters = {
   select: [],
   dataPick: {
     from: null,
     to: null
   }
}

export default (filters  = defaultFilters, action) =>{
  const {type, payload} = action
      switch (type) {
        case CHANGE_DATE:
          return { ...filters, dataPick: payload.dataPick}
      }
      switch (type) {
        case CHANGE_SELECT:
          return { ...filters, select: payload.select}
      }
      switch (type) {
        case DELETE_ARTICLE:
          return { ...filters, select:filters.select.filter(
              (select) => select.value !== payload.id
            )}
      }
}
