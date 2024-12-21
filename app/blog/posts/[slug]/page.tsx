import { notFound } from 'next/navigation';
import ArticleLayout from '../../components/ArticleLayout';
import { blogPosts } from '../../data/posts';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: PageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Esta función devuelve el contenido específico para cada post
  const getPostContent = (slug: string) => {
    switch (slug) {
      case 'out-of-state-out-of-mind':
        return (
          <>
            <p className="lead">
              During the height of the Great Depression, bootleg coal mining wasn't confined by state borders. 
              The desperate search for work and survival led miners to cross state lines, creating a complex web 
              of interstate operations that challenged law enforcement and redefined community boundaries.
            </p>

            <h2>Beyond Pennsylvania's Borders</h2>
            <p>
              While Pennsylvania's anthracite region was the epicenter of bootleg coal mining, the practice 
              spread beyond state lines. Miners from New Jersey, New York, and even as far as Maryland would 
              travel to Pennsylvania's coal fields, seeking opportunity in the face of widespread unemployment.
            </p>

            <blockquote>
              "The coal didn't care about state lines, and neither did hungry families. People went where 
              they could find work, where they could keep their children fed." - Local historian
            </blockquote>

            <h2>Interstate Commerce and Legal Challenges</h2>
            <p>
              The interstate nature of bootleg coal mining presented unique challenges for law enforcement. 
              State police found themselves dealing with a mobile workforce that could easily cross borders 
              to evade capture. Meanwhile, the transportation of bootleg coal across state lines technically 
              made it a federal offense, though enforcement was often inconsistent.
            </p>

            <h2>Community Networks Across Borders</h2>
            <p>
              What emerged was a remarkable network of community support that transcended state boundaries. 
              Families in New Jersey would shelter Pennsylvania miners, while communities in New York would 
              provide market connections for bootleg coal. These interstate relationships formed the backbone 
              of a survival economy that helped thousands weather the Depression.
            </p>

            <h2>Legacy of Interstate Cooperation</h2>
            <p>
              The interstate nature of bootleg coal mining left a lasting legacy on the region. It demonstrated 
              how economic necessity could overcome state boundaries and foster cooperation between communities. 
              This legacy of mutual aid and interstate solidarity would influence later labor movements and 
              community organizing efforts.
            </p>

            <div className="bg-gray-100 p-6 rounded-xl my-8">
              <h3 className="text-xl font-bold mb-4">Key Points</h3>
              <ul>
                <li>Bootleg mining operations frequently crossed state borders</li>
                <li>Interstate movement complicated law enforcement efforts</li>
                <li>Communities across states formed support networks</li>
                <li>The practice influenced future labor movements</li>
              </ul>
            </div>
          </>
        );

      case 'headlines-tell-story':
        return (
          <>
            <p className="lead">
              The story of bootleg coal mining was not just told through the actions of miners and communities,
              but also through the headlines that captured the drama, tension, and human elements of this
              remarkable period in American history.
            </p>

            <h2>Front Page News</h2>
            <p>
              Local and national newspapers alike found themselves covering the bootleg coal phenomenon.
              Headlines ranged from sympathetic portrayals of desperate families to sensational accounts
              of confrontations between miners and law enforcement.
            </p>

            <blockquote>
              "When the headlines hit the papers, they told more than just news - they told the story
              of survival, resistance, and community solidarity." - Media historian
            </blockquote>

            <h2>The Media's Role</h2>
            <p>
              Newspapers played a crucial role in shaping public opinion about bootleg mining. Some
              portrayed the miners as criminals, while others highlighted their struggle for survival
              during the Great Depression. This media coverage helped shape policy responses and
              public support for the miners' cause.
            </p>
          </>
        );

      case 'diy-coal-dredgers':
        return (
          <>
            <p className="lead">
              In one of the most innovative chapters of the bootleg coal era, miners developed their own
              fleet of makeshift dredging operations, creating what became known as the "Hard Coal Navy."
            </p>

            <h2>Innovation Born from Necessity</h2>
            <p>
              When traditional mining became too dangerous or closely monitored, miners turned to the
              rivers and streams where coal deposits had accumulated over decades. Using salvaged
              materials and ingenious engineering, they built dredging equipment that could extract
              coal from waterways.
            </p>

            <blockquote>
              "We built our own equipment from whatever we could find. It wasn't pretty, but it worked."
              - Former coal dredger
            </blockquote>

            <h2>The Hard Coal Navy</h2>
            <p>
              What started as individual operations soon grew into a coordinated fleet of dredging
              boats and equipment. This "Hard Coal Navy" operated primarily at night, using the
              cover of darkness to avoid detection while extracting valuable anthracite from river
              bottoms.
            </p>

            <div className="bg-gray-100 p-6 rounded-xl my-8">
              <h3 className="text-xl font-bold mb-4">DIY Equipment Types</h3>
              <ul>
                <li>Modified rowboats with dredging arms</li>
                <li>Homemade sifting screens</li>
                <li>Pulley systems for coal extraction</li>
                <li>Makeshift storage compartments</li>
              </ul>
            </div>
          </>
        );

      case 'mahanoy-prohibition-pipeline':
        return (
          <>
            <p className="lead">
              The story of Mahanoy City's bootleg coal trade intertwined with prohibition-era
              smuggling networks, creating a fascinating chapter in American underground economy.
            </p>

            <h2>A Tale of Two Bootlegs</h2>
            <p>
              During the 1920s and early 1930s, Mahanoy City became a nexus where two illegal
              trades - bootleg coal and bootleg alcohol - intersected. The same networks that
              moved illegal alcohol often helped distribute bootleg coal to urban markets.
            </p>

            <h2>Underground Networks</h2>
            <p>
              The sophisticated distribution networks developed during Prohibition proved valuable
              for coal bootleggers. Existing routes, contacts, and methods of avoiding law
              enforcement were adapted to move coal instead of alcohol.
            </p>

            <blockquote>
              "The same trucks that once carried whiskey barrels now hauled coal. The routes
              were established, the connections were there - it was a natural transition."
              - Local historian
            </blockquote>
          </>
        );

      case 'was-it-really-rebellion':
        return (
          <>
            <p className="lead">
              The term "rebellion" has been applied to the bootleg coal movement, but was it truly
              a rebellion in the traditional sense? This analysis explores the nature of this
              unique social movement.
            </p>

            <h2>Beyond Simple Resistance</h2>
            <p>
              While the bootleg coal movement certainly involved resistance to authority, it was
              more complex than a simple rebellion. It represented a community's response to
              economic crisis and corporate control of natural resources.
            </p>

            <h2>Community Organization</h2>
            <p>
              Rather than violent uprising, the movement was characterized by sophisticated
              organization, mutual aid networks, and alternative economic systems. Communities
              developed their own methods of resource distribution and conflict resolution.
            </p>

            <blockquote>
              "It wasn't just about breaking the law - it was about survival, about communities
              taking control of their own destiny." - Labor historian
            </blockquote>

            <div className="bg-gray-100 p-6 rounded-xl my-8">
              <h3 className="text-xl font-bold mb-4">Characteristics of the Movement</h3>
              <ul>
                <li>Community-based organization</li>
                <li>Economic survival strategies</li>
                <li>Alternative governance systems</li>
                <li>Peaceful resistance tactics</li>
              </ul>
            </div>
          </>
        );

      case 'equalization-movement':
        return (
          <>
            <p className="lead">
              The Equalization Movement represented a crucial turning point in the bootleg coal era,
              as miners organized to demand fair treatment and equal rights in the face of corporate
              and government opposition.
            </p>

            <h2>Origins of the Movement</h2>
            <p>
              Born out of necessity and frustration, the Equalization Movement began when miners
              realized that individual resistance wasn't enough. They needed to organize and present
              a united front to achieve lasting change.
            </p>

            <h2>Key Demands</h2>
            <p>
              The movement focused on several core demands:
            </p>
            <ul>
              <li>Fair access to mining rights</li>
              <li>Equitable distribution of resources</li>
              <li>Recognition of independent miners</li>
              <li>Protection from corporate exploitation</li>
            </ul>

            <blockquote>
              "We weren't asking for handouts - we were demanding the right to work, to feed our
              families, to live with dignity." - Movement leader
            </blockquote>
          </>
        );

      case 'bootleg-mine-maps':
        return (
          <>
            <p className="lead">
              The bootleg mine maps of Northumberland and Schuylkill Counties tell a fascinating
              story of underground geography and community knowledge that helped sustain the
              bootleg coal movement.
            </p>

            <h2>Creating the Underground Atlas</h2>
            <p>
              Miners meticulously mapped the abandoned mines and new dig sites, creating an
              informal atlas of the region's underground resources. These maps were essential
              tools for survival and safety.
            </p>

            <h2>A Community's Secret Knowledge</h2>
            <p>
              The maps were more than just drawings - they represented a community's collective
              knowledge, passed down through generations and carefully guarded from authorities.
              They marked safe passages, dangerous areas, and rich coal seams.
            </p>

            <div className="bg-gray-100 p-6 rounded-xl my-8">
              <h3 className="text-xl font-bold mb-4">Map Features</h3>
              <ul>
                <li>Underground tunnel networks</li>
                <li>Coal seam locations</li>
                <li>Safety hazards and escape routes</li>
                <li>Surface landmarks and reference points</li>
              </ul>
            </div>
          </>
        );

      case 'women-in-bootleg-coal':
        return (
          <>
            <p className="lead">
              The role of women in the bootleg coal movement was crucial yet often overlooked.
              From supporting mining operations to organizing community resistance, women were
              at the heart of this social movement.
            </p>

            <h2>Beyond Traditional Roles</h2>
            <p>
              Women in mining communities didn't just maintain households - they were active
              participants in the bootleg coal economy. They served as lookouts, managed
              finances, and sometimes even worked in the mines themselves.
            </p>

            <h2>Community Organizers</h2>
            <p>
              Women often took the lead in organizing community support networks. They
              coordinated food sharing, managed informal credit systems, and maintained
              communication networks that warned of approaching authorities.
            </p>

            <blockquote>
              "The women kept everything running. Without them, the whole operation would
              have fallen apart." - Community historian
            </blockquote>
          </>
        );

      case 'standing-down-police':
        return (
          <>
            <p className="lead">
              The confrontations between bootleg miners and law enforcement were complex
              situations that often resulted in unexpected alliances and compromises.
            </p>

            <h2>A Delicate Balance</h2>
            <p>
              Local law enforcement often found themselves caught between their duty to
              uphold the law and their sympathy for community members struggling to survive.
              This led to informal arrangements and selective enforcement.
            </p>

            <h2>Community Resistance Tactics</h2>
            <p>
              Miners developed sophisticated systems to avoid confrontation while maintaining
              their operations. Warning networks, escape routes, and community solidarity
              all played crucial roles.
            </p>

            <div className="bg-gray-100 p-6 rounded-xl my-8">
              <h3 className="text-xl font-bold mb-4">Resistance Strategies</h3>
              <ul>
                <li>Early warning systems</li>
                <li>Community protection networks</li>
                <li>Negotiation tactics</li>
                <li>Peaceful resistance methods</li>
              </ul>
            </div>
          </>
        );

      case 'family-bootleg-research':
        return (
          <>
            <p className="lead">
              Many families in the anthracite region have connections to the bootleg coal
              era. This guide helps you uncover your family's potential involvement in
              this important historical period.
            </p>

            <h2>Research Methods</h2>
            <p>
              Start your research by:
            </p>
            <ul>
              <li>Gathering family stories and oral histories</li>
              <li>Checking local newspaper archives</li>
              <li>Examining county records and mine documentation</li>
              <li>Connecting with local historical societies</li>
            </ul>

            <h2>Common Sources</h2>
            <p>
              Several types of records can help trace your family's connection to bootleg mining:
            </p>
            <ul>
              <li>Police records and court documents</li>
              <li>Local newspaper articles</li>
              <li>Church records</li>
              <li>Mining company employment records</li>
              <li>Community organization documents</li>
            </ul>

            <blockquote>
              "Every family has a story - it's just a matter of knowing where to look and
              who to ask." - Genealogist
            </blockquote>
          </>
        );

      // Agrega más casos para otros posts aquí...

      default:
        return (
          <p>Content coming soon...</p>
        );
    }
  };

  return (
    <ArticleLayout
      post={post}
      content={getPostContent(params.slug)}
    />
  );
}
