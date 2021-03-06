import React, { useState } from "react";
import IndividualTask from "../homepage/tasks/IndividualTask.tsx";
import AddTask from "../homepage/tasks/AddTask";
import { CodeModal } from "../homepage/messaging/CodeModal.js";

export default function AboutSaturnia() {
  const [exampleTasks] = useState([
    { id: 3, exampleId: 123, content: "Write a paragraph", displayTask: true },
    { id: 3, exampleId: 123, content: "Write a paragraph", displayTask: true },
    { id: 3, exampleId: 123, content: "Write a paragraph", displayTask: true }
  ]);
  const [innerCode] = useState("this");

  return (
    <div className="about_container">
      <h1>
        About <span className="pink_span">Saturnia</span>
      </h1>
      <h3>Effortless Collaboration</h3>
      <p>
        The goal of Saturnia is to make collaboration on your projects
        frictionless. In a world of productivity apps and messaging tools, our
        program is the first to actively improve the experience of developing
        for the developer, and managing for the project leads.
      </p>
      <h3>Contribute Together on Documents</h3>
      <p>
        Help each other write up plans or take notes on important topics. Manage
        who has viewing and editing permissions on the fly and invite or remove
        people with ease.
      </p>
      <h3>Keep Track of Tasks</h3>
      <p>
        Create tasks and tag specific people in them. Write your own personal
        task lists to keep track for yourself, or make them public on the
        project page.
      </p>
      <div className="about_tasklist">
        <div className="tasklist_container">
          {exampleTasks.map(task => (
            <IndividualTask
              key={task.id}
              userId={task.exampleId}
              id={task.id}
              task={task.content}
              displayTask={task.displayTask}
            />
          ))}
        </div>
      </div>
      <p>
        As a developer tagged on a task, set your progress on that task to
        "Working on it" to let your team know that it's being taken care of.
        When you're done or taking a break, go in and set your progress as such.
      </p>
      <h3>Avoid Distractions</h3>
      <p>
        A common point of contention with most modern workplace solutions is
        that they always seem to end up reducing productivity. We've taken great
        care at Saturnia to ensure that this isn't an issue. There are three
        statuses for your to choose from:
      </p>
      <ul>
        <li>
          <span id="active_green">Active</span>: you're available for discussion
          and want to see every notification
        </li>
        <li>
          <span id="active_red">Working</span>: you're busy with a task and only
          want to receive urgent notifications
        </li>
        <li>
          <span id="active_yellow">Break</span>: you're taking a break and want
          your team to know that you might be away for a while
        </li>
      </ul>
      <p>
        When you're ready to get started on a task, simply set your status as
        "Working" to get some peace and quiet. You'll only be notified with
        urgent matters. Want to get important notifications from a group of
        coworkers, even if you're busy with other matters? Just go into that
        group conversation and whitelist them for urgency.
      </p>
      <h3>Code Edit in Tandem</h3>
      <p>
        Faced with a difficult problem that you'd like your coworkers to take a
        look at? Just start a code message and paste in your work. Your
        coworkers can then take a look at it and make changes for you in
        real-time.
      </p>
      <div className="about_code_modal">
        <div className="message_box">
          <CodeModal innerCode={innerCode} />
        </div>
      </div>
      <h3>Keep Track of Importance</h3>
      <p>
        We want to make it easy for our users to cut through the chatter of
        conversations and keep track of what's essential. That's why there are a
        number of tools available to you in order to get ahold of the important
        things easier; list tasks in terms of time-sensitivity; tag messages as
        urgent and easily access them; receive reminders about work that needs
        to get done.
      </p>
      <p>
        Urgent messages in chat are outlined in red and can be easily accessed
        by clicking on the "Show urgent messages" button in any conversation.
        These chat messages are unique in that they can hold comments and be
        marked in a variety of ways, making it trivial to keep track of them.
      </p>
      <h3>Projects</h3>
      <p>Saturnia offers three distinct types of projects:</p>
      <ul>
        <li>
          Private: projects visible only to you. Share a link with prospective
          employers and give them a randomly-generated key to view your work
          here.
        </li>
        <li>
          Public: projects visible to the public. Interested individuals can
          search and apply to these projects and you, as project-lead, can
          accept or decline their applications.
        </li>
        <li>
          Enterprise: these are larger projects that are company-run. They are
          visible to search by default but can be hidden with the touch of a
          button.
        </li>
      </ul>
      <h3>Resumes and Progress Visibility</h3>
      <p>
        Saturnia's automatic resume builder lets you keep track of your progress
        and assistance on various projects through time. Here you can advertise
        your skills and abilities and let the world and future employers know
        what you're capable of.
      </p>
      <h3>Pricing</h3>
      <p>
        In searching to create a truly frictionless platform for project
        management we realized that it would be essential that the base features
        of it were always free.
      </p>
      <p>Free:</p>
      <ul>
        <li>Join and start up to 5 projects at any one time</li>
        <li>Unlimited conversations</li>
        <li>Unlimited tasks</li>
        <li>Able to start public and private projects</li>
      </ul>
      <p>Paid($5.00 per month)</p>
      <ul>
        <li>Unlimited joining of projects</li>
        <li>All free perks</li>
        <li>Able to start public, private, and enterprise projects</li>
      </ul>
    </div>
  );
}
