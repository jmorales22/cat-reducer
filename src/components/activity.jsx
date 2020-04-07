import React from 'react';
import { connect } from 'react-redux';
import { setActivity } from '../redux/actions';

import UpdateName from "./UpdateName";

const Activity = ({ activity, name, setActivity }) => (
    <>
    <h1>What is the cat doing?</h1>
    <p>{name} is { activity } </p>
    <button onClick={()=>setActivity('eating')}>Eating</button>
    <button onClick={()=>setActivity('napping')}>Napping</button>
    <button onClick={()=>setActivity('playing')}>Playing</button>
    <UpdateName />
    </>
)

const mapStateToProps = state => {
    const { activity } = state;
    return activity;
}

export default connect(
    mapStateToProps,   //mapStateToProps - What do I want?
    { setActivity }    //mapDispatchToProps - What do I want to do?
    )(Activity);