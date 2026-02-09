/**
 * ProjectManager API for TypeScript
 *
 * (c) ProjectManager.com, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     ProjectManager.com <support@projectmanager.com>
 * @copyright  ProjectManager.com, Inc.
 * @link       https://github.com/projectmgr/projectmanager-sdk-typescript
 */


/**
 * Represents the data required to create a new Risk within a Project.
 *
 * A Risk identifies a potential issue or uncertainty that may impact
 * project outcomes. This DTO captures descriptive information,
 * risk assessment metrics (such as impact and likelihood),
 * and optional ownership via assignees.
 */
export type RiskCreateDto = {

  /**
   * The common name of this Risk.
   */
  name: string;

  /**
   * A description of the work to be performed in this Risk.
   */
  description: string | null;

  /**
   * The numerical percentage, from 0-100, representing the percentage completion
   * for this risk.  Any numbers below zero or above 100 will be clamped to the
   * minimum or maximum value.
   */
  percentComplete: number;

  /**
   * Indicates the level of importance assigned to a risk, with 500 being standard priority; the higher the number, the higher the priority.
   */
  priority: number | null;

  /**
   * The potential effect of the risk.
   */
  impact: number | null;

  /**
   * Probability or chance of the risk occurring.
   */
  likelihood: number | null;

  /**
   * The planned or implemented response to address the identified risk.
   * Avoid, Mitigate, Transfer, Accept
   */
  responseId: number | null;

  /**
   * The actions or strategy planned or taken to mitigate or eliminate the risk.
   */
  resolution: string | null;

  /**
   * A list of unique identifiers of Assignees to be assigned to this Risk
   */
  assignees: string[] | null;
};
