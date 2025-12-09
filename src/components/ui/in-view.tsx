import { useRef } from "react";
import {
  motion,
  useInView,
  type UseInViewOptions,
  type HTMLMotionProps,
} from "framer-motion";

type InViewProps = {
  children: React.ReactNode;
  variants?: {
    hidden: HTMLMotionProps<"div">["initial"];
    visible: HTMLMotionProps<"div">["animate"];
  };
  transition?: HTMLMotionProps<"div">["transition"];
  viewOptions?: UseInViewOptions;
} & HTMLMotionProps<"div">;

export function InView({
  children,
  variants,
  transition,
  viewOptions,
  ...props
}: InViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewOptions);

  const defaultVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants || defaultVariants}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
}
