import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import MemberCard from "../components/member_card";
import "./members.module.css";
import * as pageStyles from "./members.module.css";

const membersData = {
  "Principal Investigator": [
    {
      name: "Professor Benoît Roux",
      role: "Principal Investigator",
      email: "roux@uchicago.edu",
      imgName: "Roux.png",
      moreLink: "https://chemistry.uchicago.edu/faculty/beno%C3%AEt-roux"
    }
  ],
  "Staff": [
    {
      name: "Lydia Blachowicz",
      role: "Lab Manager",
      email: "lblachow@uchicago.edu",
      imgName: "unknown.png", 
    }
  ],
  "Members": [
    {
      name: "Jing Li",
      email: "jingli3@uchicago.edu",
      imgName: "Li_Jing.jpg",
      moreLink: "https://voices.uchicago.edu/jingli3"
    },
    {
      name: "Kyle Ghaby",
      email: "kyleghaby@uchicago.edu",
      topics: "Dynamics and kinetics of covalent inhibitors",
      hobbies: "Programming, video games, chess",
      role: "Graduate Student",
    }
  ],
};

const sortMembersByLastName = (members) => {
  return members.sort((a, b) => {
    const lastNameA = a.name.split(" ").slice(-1)[0];
    const lastNameB = b.name.split(" ").slice(-1)[0];
    return lastNameA.localeCompare(lastNameB);
  });
};

const Members = () => {
  const sortedData = { ...membersData };
  
  Object.keys(sortedData).forEach(group => {
    if (group !== "Principal Investigator") {
      sortedData[group] = sortMembersByLastName(sortedData[group]);
    }
  });

  return (
    <Layout>
      <div className={pageStyles.membersPage}>
        {Object.entries(sortedData).map(([group, members]) => (
          <section key={group} id={group}>
            <div className="membersGroup">
              {members.map((member, index) => (
                <MemberCard key={index} {...member} />
              ))}
            </div>
          </section>
        ))}
        <section id="FormerMembers">
          <h2 style={{ textAlign: "center" }}>Former Group Members</h2>
          <hr />
          <p>[ <a href="rouxworld.html">Map of past group members at permanent research positions</a> ]</p>
        </section>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Members" />;

export default Members;
