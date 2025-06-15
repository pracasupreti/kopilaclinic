'use client';
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
} from 'react-icons/fa6';

export default function BlogExtrasSection({ post }) {
  const bullets = post.bullets ?? [];
  const tags = post.tags ?? [];
  const para = post.conclusion ?? '';

  return (
    <section className="mt-16">
      {/* Faint line */}
      <hr className="border border-black/30 mb-5" />

      {/* Tags and Social Icons */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        {/* Tags Section */}
        <div className="flex flex-wrap items-center gap-2">
          {tags.length > 0 && (
            <span className="text-pink-600 text-3xl font-bold">Tags:</span>
          )}
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#0F9F16] hover:bg-[#E00C5B] text-white text-sm font-medium px-3 py-1 rounded transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Social Icons Section */}
        <div className="flex gap-3">
          {[FaFacebookF, FaYoutube, FaInstagram, FaXTwitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              aria-label="social-link"
              className="bg-[#0F9F16] hover:bg-[#E00C5B] p-2 rounded-full text-white transition-colors duration-200"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
