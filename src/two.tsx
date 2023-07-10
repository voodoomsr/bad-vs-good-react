import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import update from 'immutability-helper';
import produce from 'immer';

function ObjectsWithLotsOfProperties() {
    const [data, setData] = useState({ a: { b: { c: { d: { e: { count: 0 }}}}}});

    const handleLodash = () => {
      const newData = _.cloneDeep(data);
      newData.a.b.c.d.e.count += 1;
      setData(newData);
      console.log('Lodash:', newData.a.b.c.d.e.count);
    }
  
    const handleImmutabilityHelper = () => {
      const newData = update(data, {
        a: { b: { c: { d: { e: { count: { $apply: x => x + 1 }}}}}}
      });
      setData(newData);
      console.log('Immutability Helper:', newData.a.b.c.d.e.count);
    }

  
    const handleImmer = () => {
      const newData = produce(data, draft => {
        draft.a.b.c.d.e.count += 1;
      });
      setData(newData);
      console.log('Immer:', newData.a.b.c.d.e.count);
    }


    useEffect(() => {console.log(data)}, [data]);
    return (
      <div>
        <button onClick={handleLodash}>Increment (lodash)</button>
        <button onClick={handleImmutabilityHelper}>Increment (immutability-helper)</button>
        <button onClick={handleImmer}>Increment (Immer)</button>
      </div>
    );
}

export default ObjectsWithLotsOfProperties;
