import React, { useEffect, useState } from 'react';
export const userColumns = [
    { field: "id", headerName: "id", width: 70 },
    {
        field: "year_in_bussiness",
        headerName: "year_in_bussiness",
        width: 230,
      },
    
    {
      field: "projects",
      headerName: "projects",
      width: 100,
    },
  
      {
        field: "happy_users",
        headerName: "happy_users",
        width: 200,
      },
      
      {
        field: "expert_team_member",
        headerName: "expert_team_member",
        width: 200,
      },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  
  //temporary data
  
   


