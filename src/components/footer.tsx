import { InView } from "../components/ui/in-view";

export function Footer() {
  return (
    <InView>
      <footer className="relative z-50 bg-neutral-200 text-neutral-900 dark:text-neutral-200 dark:bg-neutral-900 p-6 md:p-8 text-center text-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-y-6 md:gap-y-0 md:gap-x-8">
          {/* Copyright and Developer Info */}
          <div className="flex flex-col items-center md:items-start gap-y-2">
            <p>&copy; {new Date().getFullYear()} Gallerer</p>
            <a
              href="https://github.com/Jorge-Marco5"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Developed by Jorge Marcos
            </a>
          </div>

          {/* External Links */}
          <div className="flex flex-col items-center md:items-start gap-y-2">
            <p className="flex items-center gap-x-2">
              <img
                src="github.svg"
                alt="GitHub"
                className="h-5 w-5 bg-neutral-50 rounded-full"
              />
              GitHub:{" "}
              <a
                href="https://github.com/Jorge-Marco5/gallerer"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                gallerer
              </a>
            </p>
            <p>
              Image credits:{" "}
              <a
                href="https://cosmos.so"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                cosmos.so
              </a>
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col md:flex-row gap-y-2 md:gap-y-0 md:space-x-4">
            <a
              href="/privacy"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Terms of Service
            </a>
          </nav>
        </div>
      </footer>
    </InView>
  );
}
