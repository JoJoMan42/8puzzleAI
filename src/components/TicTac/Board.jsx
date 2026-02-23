import "../../css/TicTac/Board.css"
import Square from "./Square"

function Board(){
    return(
        <>
            <div className="board-box">
                
                <div className="board-row">
                    <Square/>          
                    <Square/>          
                    <Square/>                   
                </div>
                
                <div className="board-row">
                    <Square/>          
                    <Square/>          
                    <Square/>                   
                </div>
                
                <div className="board-row">
                    <Square/>          
                    <Square/>          
                    <Square/>                   
                </div>
            
            </div>
        </>
    )
}

export default Board

