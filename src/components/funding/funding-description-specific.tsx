import React from "react";
import { Typography, Image, Space } from "antd";
import "./funding-description-specific.scss";

function FundingDescriptionSpecific() {
  return (
    <Space
      direction="vertical"
      size={30}
      className="funding-description-specific"
    >
      <Typography.Title level={3} className="title">
        Details
      </Typography.Title>
      <Typography.Paragraph className="description">
        The description below will list the set of cars that I will be taking
        photographs of. I, as an self-declared artist, do take each and every
        single photo with discipline. Without riding the car beforehand, one can
        not feel every single part of the masterpiece, which the photo would
        then be simply a waste of film and energy. One rule I always keep in
        mind is that, "Have a complete understanding of what I do and what I
        ought to do". Without understanding my specialty, there would be no me
        as I am now. Without understanding vehicles, picture quality would be an
        ordinary piece of car photo you can search up any time in the internet.
        The arts in the digital album promises to be high quality, not as it
        means in pixel density or resolution, but an art that distinguishes
        oneself from any other out there. Please, first go and have a look at
        the cars below, and if any one of them favors you, it would be my
        pleasure to present you with my album "summer". Thank you for your
        support and interest.
      </Typography.Paragraph>
      <Image
        src="../../assets/images/car-collection.jpg"
        preview={false}
        alt="CarMagazine"
        width="100%"
        className="magazine"
      ></Image>
      <Typography.Paragraph className="description">
        Summer is just about here. Dreams of road trips occupy our minds. But
        what cars are best for summer? Is it smart to buy the first convertible
        you see or are there other things to consider? Let’s make a few
        assumptions: A summer car must be capable of delivering a fun driving
        experience, long distance comfort, decent fuel economy and enough
        luggage space for you and your companions. Bonus points for safety,
        reliability, and style. Don’t wait – winter is coming, as they say in
        the Seven Kingdoms. Check out our list of 10 Best Cars for Summer, and
        start taking photos now.
      </Typography.Paragraph>
      <Image
        src="../../assets/images/car-summer.jpg"
        preview={false}
        alt="car-summer"
        width="100%"
        className="magazine"
      ></Image>
      <Typography.Paragraph className="description">
        By HhanN <br />
        2017 Jaguar F-Type SVR AWD Convertible
        <br />
        This one is a no-brainer. If you can get your hands on a 2017 Jaguar
        F-TYPE SVR Convertible for the summer, latch on and don’t let go. Sure,
        it will burn your bank balance with its $128,800 base price. But you
        won’t care, driving around, top down, savoring the exhaust notes from
        the 575-hp supercharged V8 with all-wheel drive. The perfect car for a
        weekend getaway, F-Type Convertible loves to romp around twisty roads,
        lope along highways and gallop down the back roads. F-Type is one of the
        most gorgeous roadsters ever built and is all-day comfortable for two
        very lucky people: Its driver and its driver’s favorite companion.
      </Typography.Paragraph>
      <Image
        src="../../assets/images/car-summer2.jpg"
        preview={false}
        alt="car-summer"
        width="100%"
        className="magazine"
      ></Image>
      <Typography.Paragraph className="description">
        By Volkswagon <br />
        2017 Volkswagen Golf Alltrack <br />
        In contrast with cozy convertibles, the 2017 Volkswagen Golf Alltrack
        confounds expectations with a roomy interior concealed within compact
        dimensions. Standard 4MOTION all-wheel drive and a tall suspension setup
        encourage off-road exploration. Add an optional bike holder attachment
        kit ($537) or kayak attachment kit ($531), and you’re set for adventure.
        Just don’t overdo it on the roof, or you’ll block the view through the
        standard (SE and SEL) panoramic sunroof, which brings the world inside
        visually while maintaining safety and weather protection. The Alltrack
        is rugged without the rough edges, and capable without resorting to SUV
        size or styling. It’s a great choice for an active summer car.
      </Typography.Paragraph>
      <Image
        src="../../assets/images/car-summer3.jpg"
        preview={false}
        alt="car-summer"
        width="100%"
        className="magazine"
      ></Image>
      <Typography.Paragraph className="description">
        By George <br />
        2017 Mazda MX-5 Miata RF
        <br />
        Hot on the heels of its makeover for 2016, another Miata model has been
        added for the new year. The new 2017 Mazda MX-5 Miata RF replaces the
        traditional convertible soft top with a retractable targa-style roof
        that transforms the car’s appearance from roadster to mini supercar.
        Retracting the RF’s roof takes just 13 seconds, and doesn’t take up any
        more cargo space than the soft top. The RF looks great either way – hard
        top in place, or retracted – and is as quiet as an enclosed car when
        things are buttoned up. Did we mention that it’s a Miata, and so it’s
        perfectly balanced and fun to drive in a wide variety of environments
        and uses? Well, it is.
      </Typography.Paragraph>
    </Space>
  );
}

export default FundingDescriptionSpecific;
