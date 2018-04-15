import React, {Component} from 'react';

export default function renderIf(condition, content) {
  if (this.loggedIn === true) {
    return <button>
              Log Out
           </button>
  } else {
    return null
  }
}
