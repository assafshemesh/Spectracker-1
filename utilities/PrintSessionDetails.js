import React, {useState} from 'react';

const PrintSessionDetails = (details, where) => {
    console.log(`---------------------- SESSION DETAILS from ${where} -------------------------`);
    console.log("ssessionDetails.username = " + details.username );
    console.log("ssessionDetails.patientName = " + details.patientName );
    console.log("ssessionDetails.timeOfSession = date: " + details.timeOfSession.date  + "  hour: " + details.timeOfSession.hour);
    console.log("ssessionDetails.sessionDuration = " + details.sessionDuration );
    console.log("ssessionDetails.isOngoing = " + details.isOngoing );
    console.log("ssessionDetails.sessionGoals= " + details.sessionGoals );
    console.log("ssessionDetails.sessionRecommendedActivities= " + details.sessionRecommendedActivities );
    console.log("ssessionDetails.restOfActivities= " + details.restOfActivities );
    console.log("ssessionDetails.selectedActivity= " + details.selectedActivity );
    console.log("ssessionDetails.selectedEnvironment= " + details.selectedEnvironment );
}

export default PrintSessionDetails;