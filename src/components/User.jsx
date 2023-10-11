import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  // Either call database from this param, make an api request, etc.
  return <div className="flex items-center justify-center p-4 bg-slate-600 text-white">User: {id}</div>;
};

export default User;
