import { CountSelect } from "../../widgets/Select"

export const Filter = () => {
    return (
        <>
            <div>
                <label htmlFor="startDate">
                start date: 
                <input type="date" name="startDate" />
            </label>
            </div>
            <div>
                <label htmlFor="endDate">
                    end date: 
                    <input type="date" name="endDate" />
                </label>
            </div>
            <div>
                <button>Get read letters</button>
            </div>
            <div>
                <button>Get unread letters</button>
            </div>
            <div>
                <CountSelect/>
            </div>
        </>
            
    )
}