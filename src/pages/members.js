import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import membersData from "../data/membersData";
import MemberCard from "../components/member_card";
import * as pageStyles from "./members.module.css";

//TODO: add years to former members?
//TODO: secondary sort by first name

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
            group !== "Former" && (
              <section key={group} id={group}>
                <div className={pageStyles.membersGroup}>
                  {members.map((member, index) => (
                    <MemberCard key={index} {...member} />
                  ))}
                </div>
              </section>
            )
          ))}
        <section id="FormerMembers">
          <h2 style={{ 
            textAlign: "center", 
            fontSize: "2rem",
            }}>Former Group Members</h2>
          <h3>[ <a href="rouxworld.html">Map of past group members at permanent research positions</a> ]</h3>
          <div className={pageStyles.membersGroup}>
            {sortedData["Former"] && sortedData["Former"].map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Members" />;

export default Members;

