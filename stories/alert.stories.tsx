import { Meta, StoryObj } from "@storybook/react";
import Link from "next/link";

import {
  Alert,
  AlertDescription,
  AlertTitle,
  CircularProgress,
  CloseButton,
  LinearProgress,
} from "@/components/ui";
import {
  AlertCircle,
  AlertTriangle,
  ArrowRight2,
  CheckCircle,
  ExternalLink,
  X2,
} from "@/components/icons";
import Image from "next/image";

const meta: Meta = {
  title: "Alert",
  component: Alert,
  argTypes: {
    variant: {
      control: false,
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=111-196223&mode=design&t=NLYVvxi9cxhKF9hN-4",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    variant: "success",
  },
  render: (args) => (
    <Alert {...args}>
      <CloseButton />
      <AlertTriangle className="h-5 w-5" />
      <AlertTitle>Successfully updated profile</AlertTitle>
      <AlertDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        pariatur, ipsum similique veniam.
      </AlertDescription>
      <div className="mt-3 flex items-center gap-x-3 text-sm font-semibold">
        <Link className="focus-visible:outline-none" href="/">
          Learn more
        </Link>
        <Link
          className="flex items-center gap-x-2 text-success-600 focus-visible:outline-none "
          href="/"
        >
          View changes
          <ArrowRight2 />
        </Link>
      </div>
    </Alert>
  ),
};

export const Primary: Story = {
  args: {
    variant: "primary",
  },
  render: (args) => (
    <Alert {...args}>
      <CloseButton />
      <AlertTriangle className="h-5 w-5" />
      <AlertTitle>Successfully updated profile</AlertTitle>
      <AlertDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        pariatur, ipsum similique veniam.
      </AlertDescription>
      <div className="mt-3 flex items-center gap-x-3 text-sm font-semibold">
        <Link className="focus-visible:outline-none" href="/">
          Learn more
        </Link>
        <Link
          className="flex items-center gap-x-2 text-primary-600 focus-visible:outline-none"
          href="/"
        >
          View changes
          <ArrowRight2 />
        </Link>
      </div>
    </Alert>
  ),
};

export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <CloseButton />
      <AlertCircle className="h-5 w-5" />
      <AlertTitle>We’ve just released a new feature</AlertTitle>
      <AlertDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        pariatur, ipsum similique veniam.
      </AlertDescription>

      <div className="mt-3 flex items-center gap-x-3 text-sm font-semibold">
        <Link className="focus-visible:outline-none" href="/">
          Learn more
        </Link>
        <Link
          className="flex items-center gap-x-2 text-gray-600 focus-visible:outline-none"
          href="/"
        >
          View changes
          <ArrowRight2 />
        </Link>
      </div>
    </Alert>
  ),
};

export const Error: Story = {
  args: {
    variant: "error",
  },
  render: (args) => (
    <Alert {...args}>
      <CloseButton />
      <AlertCircle className="h-5 w-5" />
      <AlertTitle>We’ve just released a new feature</AlertTitle>
      <AlertDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        pariatur, ipsum similique veniam.
      </AlertDescription>

      <div className="mt-3 flex items-center gap-x-3 text-sm font-semibold">
        <Link className="focus-visible:outline-none" href="/">
          Learn more
        </Link>
        <Link
          className="flex items-center gap-x-2 text-error-600 focus-visible:outline-none"
          href="/"
        >
          View changes
          <ArrowRight2 />
        </Link>
      </div>
    </Alert>
  ),
};

export const Warning: Story = {
  args: {
    variant: "warning",
  },
  render: (args) => (
    <Alert {...args}>
      <CloseButton />
      <AlertTriangle className="h-5 w-5" />
      <AlertTitle>Just to let you know this might be a problem</AlertTitle>
      <AlertDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        pariatur, ipsum similique veniam.
      </AlertDescription>

      <div className="mt-3 flex items-center gap-x-3 text-sm font-semibold">
        <Link className="focus-visible:outline-none" href="/">
          Learn more
        </Link>
        <Link
          className="flex items-center gap-x-2 text-warning-600 focus-visible:outline-none"
          href="/"
        >
          View changes
          <ArrowRight2 />
        </Link>
      </div>
    </Alert>
  ),
};

export const SuccessAction: Story = {
  args: {
    variant: "success",
  },
  render: (args) => (
    <Alert {...args}>
      <CheckCircle className="h-5 w-5 flex-none" />
      <AlertTitle className="text-success-600">
        We’ve just released a new feature
      </AlertTitle>
    </Alert>
  ),
};

export const ErrorAction: Story = {
  args: {
    variant: "error",
  },
  render: (args) => (
    <Alert {...args}>
      <CheckCircle className="h-5 w-5 flex-none" />
      <AlertTitle className="text-error-600">
        We’ve just released a new feature
      </AlertTitle>
    </Alert>
  ),
};

export const PrimaryAction: Story = {
  args: {
    variant: "primary",
  },
  render: (args) => (
    <Alert {...args}>
      <CheckCircle className="h-5 w-5 flex-none" />
      <AlertTitle className="text-primary-600">
        We’ve just released a new feature
      </AlertTitle>
    </Alert>
  ),
};

export const WarningAction: Story = {
  args: {
    variant: "warning",
  },
  render: (args) => (
    <Alert {...args}>
      <CheckCircle className="h-5 w-5 flex-none" />
      <AlertTitle className="text-warning-600">
        We’ve just released a new feature
      </AlertTitle>
    </Alert>
  ),
};

export const DefaultAction: Story = {
  render: (args) => (
    <Alert {...args}>
      <CheckCircle className="h-5 w-5 flex-none" />
      <AlertTitle className="text-gray-600">
        We’ve just released a new feature
      </AlertTitle>
    </Alert>
  ),
};

export const DisasterRecovery = () => {
  return (
    <div
      className="relative max-w-[238px] rounded-lg bg-gray-100 px-4 py-[26px]"
      role="alert"
    >
      <CloseButton className="absolute right-2 top-2 text-gray-500" />
      <div className="text-sm font-semibold text-gray-black">
        Disaster Recovery
      </div>
      <div className="mt-1 text-sm text-gray-500">
        Disaster recovery was designed to protect data against catastrophic
        failure.
      </div>
      <Link
        className="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-primary-500 focus-visible:outline-none"
        href="/"
      >
        Learn more
        <ExternalLink />
      </Link>
    </div>
  );
};

export const UsedSpaceLinearProgress = () => {
  return (
    <div
      className="relative max-w-[238px] rounded-lg bg-gray-100 px-4 py-[26px]"
      role="alert"
    >
      <CloseButton className="absolute right-2 top-2 text-gray-500" />
      <div className="text-sm font-semibold text-gray-black">Used space</div>
      <div className="mt-1 text-sm text-gray-500">
        Your team has used 80% of your available space. Need more?
      </div>
      <LinearProgress className="mt-3 bg-gray-300" value={75} />

      <div className="mt-3 flex items-center gap-x-3">
        <button className="text-sm font-semibold text-gray-600 focus-visible:outline-none">
          Dismiss
        </button>
        <Link
          className="text-sm font-semibold text-primary-500 focus-visible:outline-none"
          href="/"
        >
          Upgrade plan
        </Link>
      </div>
    </div>
  );
};

export const UsedSpaceCircularProgress = () => {
  return (
    <div
      className="relative max-w-[238px] rounded-lg bg-gray-100 px-4 py-[26px]"
      role="alert"
    >
      <CloseButton className="absolute right-2 top-2 text-gray-500" />
      <CircularProgress
        className="text-gray-700"
        trackClassName="text-gray-300"
        value={80}
        size={64}
        strokeWidth={6}
      />
      <div className="mt-4 text-sm font-semibold text-gray-black">
        Used space
      </div>
      <div className="mt-1 text-sm text-gray-500">
        Your team has used 80% of your available space. Need more?
      </div>
      <div className="mt-3 flex items-center gap-x-3">
        <button className="text-sm font-semibold text-gray-600 focus-visible:outline-none">
          Dismiss
        </button>
        <Link
          className="text-sm font-semibold text-primary-500 focus-visible:outline-none"
          href="/"
        >
          Upgrade plan
        </Link>
      </div>
    </div>
  );
};

export const NewFeatureAvailable = () => {
  return (
    <div
      className="relative max-w-[238px] rounded-lg bg-gray-100 px-4 py-[26px]"
      role="alert"
    >
      <CloseButton className="absolute right-2 top-2 text-gray-500" />
      <CircularProgress
        className="text-gray-700"
        trackClassName="text-gray-300"
        value={80}
        size={64}
        strokeWidth={6}
      />
      <div className="mt-4 text-sm font-semibold text-gray-black">
        New features available!
      </div>
      <div className="mt-1 text-sm text-gray-500">
        Check out the new dashboard view. Pages now load faster.
      </div>
      <div className="relative mt-3 h-[136px]">
        <Image
          className="object-cover"
          src="/feature.png"
          alt="New feature"
          fill
        />
      </div>
      <div className="mt-3 flex items-center gap-x-3">
        <button className="text-sm font-semibold text-gray-600 focus-visible:outline-none">
          Dismiss
        </button>
        <Link
          className="text-sm font-semibold text-primary-500 focus-visible:outline-none"
          href="/"
        >
          What&apos;s new?
        </Link>
      </div>
    </div>
  );
};
