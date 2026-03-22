'use client';

import { useState } from 'react';

interface Profile {
  id: string;
  handle: string;
  name: str
      <header className="border-b-4 border-purple-400 bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-black">App</h1>
              <p className="text-gray-400 mt-2">Interactive demo</p>
            </div>
            <nav className="flex gap-2">
              <a href="/" className="px-4 py-2 bg-gray-800 border-2 border-gray-600 hover:border-purple-400 rounded font-bold transition-all">
                Home
              </a>
              <a href="/docs" className="px-4 py-2 bg-purple-500 border-2 border-purple-400 rounded font-bold transition-all">
                Documentation
              </a>
            </nav>
          </div>
        </div>
      </header>

ing;
  platform: string;
  followers: number;
  posts: number;
  earnings: string;
  verified: boolean;
}

interface Post {
  id: string;
  author: string;
  content: string;
  likes: number;
  comments: number;
  tips: string;
  platform: string;
  timestamp: string;
}

const profiles: Profile[] = [
  { id: '1', handle: '@vitalik.lens', name: 'Vitalik Buterin', platform: 'Lens', followers: 890000, posts: 1240, earnings: '$45.2K', verified: true },
  { id: '2', handle: '@dwr.fc', name: 'Dan Romero', platform: 'Farcaster', followers: 245000, posts: 3400, earnings: '$12.8K', verified: true },
  { id: '3', handle: '@jessepollak.bsky', name: 'Jesse Pollak', platform: 'Bluesky', followers: 180000, posts: 890, earnings: '$8.5K', verified: true },
  { id: '4', handle: '@stani.lens', name: 'Stani Kulechov', platform: 'Lens', followers: 320000, posts: 2100, earnings: '$28.9K', verified: true },
];

const posts: Post[] = [
  { id: '1', author: '@vitalik.lens', content: 'The future of social is decentralized. No more algorithms controlling what you see.', likes: 12400, comments: 890, tips: '$420', platform: 'Lens', timestamp: '2h ago' },
  { id: '2', author: '@dwr.fc', content: 'Frames are changing how we interact onchain. Build once, deploy everywhere.', likes: 8900, comments: 450, tips: '$180', platform: 'Farcaster', timestamp: '4h ago' },
  { id: '3', author: '@jessepollak.bsky', content: 'AT Protocol enables true data portability. Your content, your choice.', likes: 5600, comments: 320, tips: '$95', platform: 'Bluesky', timestamp: '6h ago' },
];

const platforms = ['All', 'Lens', 'Farcaster', 'Bluesky'];

export default function Home() {
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  const filteredProfiles = selectedPlatform === 'All'
    ? profiles
    : profiles.filter(p => p.platform === selectedPlatform);

  const filteredPosts = selectedPlatform === 'All'
    ? posts
    : posts.filter(p => p.platform === selectedPlatform);

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="border-b-4 border-pink-400 bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black">SocialFi Dashboard</h1>
          <p className="text-gray-400 mt-2">Decentralized social media with Web3 monetization</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-900 border-4 border-pink-400 p-4 text-center">
            <div className="text-3xl font-black text-pink-400">2.1M</div>
            <div className="text-sm text-gray-400">Total Users</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">890K</div>
            <div className="text-sm text-gray-400">Daily Posts</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black text-green-400">$4.2M</div>
            <div className="text-sm text-gray-400">Creator Earnings</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">3</div>
            <div className="text-sm text-gray-400">Platforms</div>
          </div>
        </section>

        {/* Platform Tabs */}
        <section className="bg-gray-900 border-4 border-gray-700 p-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {platforms.map((platform) => (
              <button
                key={platform}
                onClick={() => setSelectedPlatform(platform)}
                className={`whitespace-nowrap px-4 py-2 font-bold border-2 transition-all ${
                  selectedPlatform === platform
                    ? 'bg-pink-500 border-pink-400'
                    : 'bg-gray-800 border-gray-600 hover:border-gray-500'
                }`}
              >
                {platform}
              </button>
            ))}
          </div>
        </section>

        {/* Top Creators */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">Top Creators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {filteredProfiles.map((profile) => (
              <div
                key={profile.id}
                onClick={() => setSelectedProfile(profile)}
                className={`p-4 border-4 cursor-pointer transition-all hover:border-pink-400 ${
                  selectedProfile?.id === profile.id ? 'border-pink-400 bg-pink-900/20' : 'border-gray-700 bg-gray-800'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="font-bold text-pink-400">{profile.name}</span>
                    {profile.verified && <span className="ml-2 text-blue-400">✓</span>}
                  </div>
                  <span className="px-2 py-1 text-xs font-bold bg-gray-700 text-gray-400">
                    {profile.platform}
                  </span>
                </div>
                <div className="text-sm text-gray-400 mb-3">{profile.handle}</div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <span className="text-gray-500">Followers</span>
                    <div className="font-bold">{(profile.followers / 1000).toFixed(0)}K</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Posts</span>
                    <div className="font-bold">{profile.posts.toLocaleString()}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Earnings</span>
                    <div className="font-bold text-green-400">{profile.earnings}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Profile */}
        {selectedProfile && (
          <section className="bg-gray-900 border-4 border-pink-400 p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-black text-pink-400">{selectedProfile.name}</h2>
                <p className="text-gray-400">{selectedProfile.handle} • {selectedProfile.platform}</p>
              </div>
              <button
                onClick={() => setSelectedProfile(null)}
                className="px-4 py-2 bg-gray-700 text-white font-bold border-2 border-gray-600 hover:bg-gray-600"
              >
                Close
              </button>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Followers</div>
                <div className="text-2xl font-bold">{selectedProfile.followers.toLocaleString()}</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Posts</div>
                <div className="text-2xl font-bold">{selectedProfile.posts.toLocaleString()}</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Total Earnings</div>
                <div className="text-2xl font-bold text-green-400">{selectedProfile.earnings}</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Verified</div>
                <div className="text-2xl font-bold text-blue-400">{selectedProfile.verified ? '✓ Yes' : 'No'}</div>
              </div>
            </div>

            <button className="w-full py-4 bg-pink-500 text-white font-bold border-4 border-pink-400 hover:bg-pink-400">
              Follow {selectedProfile.handle}
            </button>
          </section>
        )}

        {/* Feed */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">Trending Posts</h2>
          <div className="space-y-4">
            {filteredPosts.map((post) => (
              <div key={post.id} className="p-4 bg-gray-800 border border-gray-700">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold text-pink-400">{post.author}</span>
                  <span className="text-xs text-gray-500">{post.timestamp}</span>
                </div>
                <p className="text-gray-300 mb-3">{post.content}</p>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span>❤️ {post.likes.toLocaleString()}</span>
                  <span>💬 {post.comments}</span>
                  <span className="text-green-400">💰 {post.tips}</span>
                  <span className="ml-auto px-2 py-1 text-xs font-bold bg-gray-700">{post.platform}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Platforms */}
        <section className="bg-gray-900 border-4 border-pink-400 p-6">
          <h2 className="text-xl font-black text-pink-400 mb-4">SocialFi Platforms</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-800 border border-gray-700">
              <div className="font-bold text-pink-400 mb-2">Lens Protocol</div>
              <p className="text-sm text-gray-400">Own your social graph. Posts as NFTs.</p>
              <div className="mt-2 text-xs text-gray-500">890K users • $2.1M creator earnings</div>
            </div>
            <div className="p-4 bg-gray-800 border border-gray-700">
              <div className="font-bold text-pink-400 mb-2">Farcaster</div>
              <p className="text-sm text-gray-400">Sufficiently decentralized social. Frames.</p>
              <div className="mt-2 text-xs text-gray-500">450K users • $1.4M creator earnings</div>
            </div>
            <div className="p-4 bg-gray-800 border border-gray-700">
              <div className="font-bold text-pink-400 mb-2">Bluesky</div>
              <p className="text-sm text-gray-400">AT Protocol. Data portability.</p>
              <div className="mt-2 text-xs text-gray-500">760K users • $700K creator earnings</div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">How SocialFi Works</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">1️⃣</div>
              <h3 className="font-bold text-pink-400 mb-2">Create Profile</h3>
              <p className="text-xs text-gray-400">Own your social identity</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">2️⃣</div>
              <h3 className="font-bold text-green-400 mb-2">Post Content</h3>
              <p className="text-xs text-gray-400">Content stored on decentralized networks</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">3️⃣</div>
              <h3 className="font-bold text-yellow-400 mb-2">Earn Tips</h3>
              <p className="text-xs text-gray-400">Get paid directly by followers</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">4️⃣</div>
              <h3 className="font-bold text-blue-400 mb-2">Port Data</h3>
              <p className="text-xs text-gray-400">Take your followers anywhere</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-8 border-t border-gray-800">
          <p>
            Built by <a href="https://x.com/samdevrel" className="text-pink-400 hover:underline">@samdevrel</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
