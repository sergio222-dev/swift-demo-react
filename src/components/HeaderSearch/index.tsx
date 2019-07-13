import React from 'react';
import './HeaderSearch.scss';
import {Search} from '@material-ui/icons';

export function HeaderSearch() {


    return (
      <div className={'z-search'}>
          <div>
              <input type={'text'}/>
              <Search />
          </div>
      </div>
    );
}