import React from 'react'

const styles = {
  found: {
    textDecoration: 'line-through',
    color: 'grey'
  },
  pointer: { cursor: 'pointer' }
}

const Item = ({ id, found, name, updateItem, deleteItem, category }) => (
  <div className="col s12">
    <div className="col m8">
      <div style={found ? styles.found : {}} className="center">
        {name} ({category})
      </div>
    </div>
    <div className="col m2">
      <input
        id={`item-${id}`}
        type="checkbox"
        defaultChecked={found}
        onClick={() => updateItem(id)}
      />
      <label htmlFor={`item-${id}`}>Found?</label>
    </div>
    <div style={styles.pointer} className="col m1" onClick={() => deleteItem(id)}>
      X
    </div>
  </div>
)

export default Item