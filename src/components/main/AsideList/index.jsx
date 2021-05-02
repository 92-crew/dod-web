import React from 'react';
import { ListGroup, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import AsideItems from '@components/main/AsideItems';

function getToday() {
  const date = new Date();
  const year = date.getFullYear();
  const month = (`0${(1 + date.getMonth())}`).slice(-2);
  const day = (`0${date.getDate()}`).slice(-2);

  return `${year}-${month}-${day}`;
}

function AsideList({ data }) {
  const { contents } = data;

  const today = getToday();
  console.log(today);

  return (
    <aside>
      <div className="aside-fixed">
        <div className="aside-radio">
          <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            <ToggleButton value={1}>전체 할 일</ToggleButton>
            <ToggleButton value={2}>오늘 할 일</ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <div className="aside-list">
        <ListGroup as="ul">
          {
            contents.map((item, idx) => {
              return (
                <AsideItems key={`${item.dueDateString}_${idx}`} data={item} />
              );
            })
          }
        </ListGroup>
      </div>
    </aside>
  );
}

export default AsideList;
