import React from "react";
import { useQuery } from "@apollo/client";

import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";
import CreateGroup from "../components/CreateGroup";
import GroupList from "../components/GroupList";
import GroupCard from "../components/GroupCard";
import Note from "../components/Note";
import JoinGroup from "../components/JoinGroup";

import { QUERY_GROUP } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_GROUP);
  const notes = data?.notes || [];

  return (
    <main className="container my-1">
      <div className="flex-row justify-center pb-3">
        <div className="col-9">
          <h1>My Groups</h1>
        </div>
        <div className="col-3">
          {/* CreateGroup is a button that triggers a modal and it appears on the Home page. It is used to create a group. */}
          <CreateGroup />
        </div>
      </div>
      <div class="row gx-4">

        {/* GroupCard displays on the Home page for each Group that the User has joined */}
        <div className="col-4">
          <GroupCard />
        </div>
        <div className="col-4">
          <GroupCard />
        </div>
        <div className="col-4">
          <GroupCard />
        </div>

      </div>
      {/* <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <NoteList notes={notes} title="Some Feed for Thought(s)..." />
          )}
        </div> */}
    </main>
  );
};

export default Home;
