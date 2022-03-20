import {useState, useEffect} from 'react';
import {useNavigate} from "react-router";
import socket from '../../socket';
import ACTIONS from "../../socket/actions";
import {v4} from 'uuid';

export default function Main() {
    const navigate = useNavigate();
    const [rooms, updateRooms] = useState([]);

    useEffect(() => {
        socket.on(ACTIONS.SHARE_ROOMS, ({rooms = []} = {}) => {
            updateRooms(rooms);
        });
    }, []);

    function goRoom(roomID) {
        navigate(`/room/${roomID}`);
    }

    return (
        <div>
            <h1>Available Rooms</h1>
            <ul>
                {rooms.map(roomID => (
                    <li key={roomID}>
                        {roomID}
                        <button onClick={() => goRoom(roomID)}>JOIN ROOM</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => {
                goRoom(v4())
            }}
            >Create New Room
            </button>
        </div>
    );
}
