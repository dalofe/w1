import TimeTableItem from "./TimeTableItem";

export default function TimeTableList(props) {    
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1rem'}}>
            {props.list.hour.map( (TimeTableData, index) => {
                const date = new Date(TimeTableData.time);
                if(props.list.isToday){
                    if(date > props.localDateNow) {
                        return <TimeTableItem 
                                    key={TimeTableData.time_epoch}
                                    timeData={TimeTableData}
                                    hours={date.getHours()}
                                />
                    }
                } else {
                    if(index % 4 === 0){
                        return <TimeTableItem 
                                    key={TimeTableData.time_epoch}
                                    timeData={TimeTableData}
                                    hours={date.getHours()}
                                />
                    }
                }
            })}
        </div>
    );
};