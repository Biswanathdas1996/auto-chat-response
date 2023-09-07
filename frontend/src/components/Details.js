import React from "react";

const PolicyComponent = ({ policy }) => {
  return (
    <div className="policy-container">
      <h2>{policy.policy_name}</h2>
      <p>
        <strong>Policy Number:</strong> {policy.policy_number}
      </p>
      <p>
        <strong>Total Premium:</strong> {policy.total_premium}
      </p>
      <p>
        <strong>Monthly Premium:</strong> {policy.monthly_premium}
      </p>
      <p>
        <strong>Total Premium Paid:</strong> {policy.total_premium_paid}
      </p>
      <p>
        <strong>Last Billing Date:</strong> {policy.last_billing_date}
      </p>
      <p>
        <strong>Next Billing Date:</strong> {policy.next_billing_date}
      </p>

      <h3>Coverage</h3>
      <ul>
        <li>
          <strong>Room:</strong> {policy.coverage.room}
        </li>
        <li>
          <strong>Ambulance:</strong> {policy.coverage.ambulance}
        </li>
        <li>
          <strong>Pre-existing Diseases:</strong>{" "}
          {policy.coverage.pre_existing_desiseas}
        </li>
        <li>
          <strong>Accidental Coverage:</strong>{" "}
          {policy.coverage.accidantal_coverage}
        </li>
        <li>
          <strong>Terminal Diseases:</strong> {policy.coverage.terminal_desises}
        </li>
        <li>
          <strong>Sum Insured:</strong> {policy.coverage.sum_insured}
        </li>
      </ul>

      <h3>Network Cashless Hospitals</h3>
      <ul>
        {policy.network_cashless_hospitals.map((hospital) => (
          <li key={hospital.name}>{hospital.name}</li>
        ))}
      </ul>

      <h3>Health Issues Covered Under Cashless Claim</h3>
      <ul>
        {policy.health_issues_covered_under_cashless_claim.map((issue) => (
          <li key={issue}>{issue}</li>
        ))}
      </ul>

      <h3>Contact Person</h3>
      <p>
        <strong>Name:</strong> {policy.contact_person.name}
      </p>
      <p>
        <strong>Contact No:</strong> {policy.contact_person.contact_no}
      </p>
    </div>
  );
};

export default PolicyComponent;

// Usage:
// <PolicyComponent policy={policyData} />
