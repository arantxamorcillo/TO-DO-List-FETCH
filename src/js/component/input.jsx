import React, { useEffect, useState } from "react";


const input =()=>{
    return (
        <input
				className="New-Task"
				type="text"
				placeholder="What do you need to do?"
				onChange={Change}
				onKeyPress={Enter}
			/>
    )
}
