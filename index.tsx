// pages/index.tsx
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="p-6 space-y-6">
      <section>
        <h1 className="text-3xl font-bold mb-2">Arnab's Cybersecurity Portfolio</h1>
        <p className="text-lg">Blue Team Expert | Bug Bounty Hunter | Privacy Advocate</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">Certifications</h2>
            <ul className="list-disc list-inside">
              <li>AZ-900 Certified</li>
              <li>GDPR, CCPA Expert</li>
              <li>Bug Bounty Expert (30-module program in progress)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">Experience</h2>
            <ul className="list-disc list-inside">
              <li>7 years in IT and Cybersecurity</li>
              <li>2 years - Azure Security</li>
              <li>3 years - Blue Teaming</li>
              <li>1 year - VMware Security</li>
              <li>2 years - ITIL Service Management</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">Education</h2>
            <p>BCA Graduate (2016)</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">Skills</h2>
            <ul className="list-disc list-inside">
              <li>Cloud Security (Azure)</li>
              <li>SIEM, Threat Hunting</li>
              <li>Raspberry Pi Offensive Projects</li>
              <li>OSINT & Privacy Tools</li>
              <li>Penetration Testing</li>
              <li>Obsidian-based PKM</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
