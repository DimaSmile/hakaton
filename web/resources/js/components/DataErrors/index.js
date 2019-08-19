import React from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const DataErrors = props => {
    const { error } = props;
    return (
        <Card>
            <CardContent>
                <Typography variant="h6">
                    {error}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default DataErrors;