import React, {useState} from 'react';
import styles from './SearchBar.module.css';
import './SearchBar.css'
import { Icon } from 'semantic-ui-react';
import Form from 'react-bootstrap/Form';

export function SearchBar(props) {
    const [term, setTerm] = useState(props.term || '');
    const [location, setLocation] = useState(props.location || '');

    function submit(e) {
        if(typeof props.search === 'function') {
            props.search(term, location);
        }
        console.log(term, location);
        e.preventDefault();
    }


    return (
        <form onSubmit={submit}>
            <div className="field has-addons">
                <div className='input-field-search'>
                    <div className="control">
                    <Form.Group className="mb-3">
                            {/* <Form.Label className="margin-right cuisine-txt" >Choose a cuisine!</Form.Label> */}
                            <Form.Select 
                                    onChange={(e) => {
                                        setTerm(e.target.value)
                                    }}
                            className='dropdown'>
                            <option>Choose a cuisine!</option>
                            <option>American</option>
                            <option>Burger</option>
                            <option>Mexican</option>
                            <option>Italian</option>
                            <option>Indian</option>
                            <option>Thai</option>
                            <option>Sushi</option>
                            <option>Chinese</option>
                            <option>Pizza</option>
                            <option>Japanese</option>
                            <option>Spanish</option>
                            </Form.Select>
                            </Form.Group>
                    </div>
                    <div className="control">
                        <input className={`input ${styles['input-control']}`}
                            onChange={(e) => setLocation(e.target.value)}
                            type="text"
                            value={location}
                            placeholder="City or Zip"/>
                    </div>
                </div>
                <div className={`button ${styles['search-button']}`} onClick={submit}>
                    <span className={`icon is-small ${styles['search-icon']}`}> <Icon name='search' /></span>
                </div>
            </div>
        </form>
    );
}